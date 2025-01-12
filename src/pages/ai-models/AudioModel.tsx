import { motion } from 'framer-motion';
import { Mic, Play, Square, Volume2, Activity } from 'lucide-react';
import { useState, useRef } from 'react';
import AIModelNav from '../../components/AIModelNav';

const AudioModel = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        simulateTranscription();
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const simulateTranscription = () => {
    setTimeout(() => {
      setTranscription(
        "This is a simulated transcription of the recorded audio. In a real implementation, this would be processed by an AI speech recognition model."
      );
    }, 1500);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Audio Model Demo
        </h1>
        <div className="rounded-2xl border border-border bg-card p-8">
          <motion.div 
            className="mb-8 text-center" 
            variants={itemVariants}
          >
            <Volume2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Audio Model</h1>
            <p className="text-xl text-muted-foreground">
              Experience real-time speech recognition and audio processing.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4">Record Audio</h3>
                
                <div className="flex flex-col items-center gap-8">
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center group ${
                      isRecording ? 'bg-red-500/10' : 'hover:bg-primary/10'
                    } transition-colors cursor-pointer`}
                      onClick={isRecording ? stopRecording : startRecording}
                    >
                      {isRecording ? (
                        <Square className="w-8 h-8 text-red-500" />
                      ) : (
                        <Mic className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    {isRecording && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-red-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {audioUrl && (
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <button 
                          className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                          onClick={() => {
                            const audio = document.querySelector('audio');
                            if (audio?.paused) {
                              audio.play();
                            } else {
                              audio?.pause();
                            }
                          }}
                        >
                          <Play className="w-5 h-5" />
                        </button>
                        <div className="flex-1 flex items-center gap-1">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 h-8 bg-primary/20 rounded-full overflow-hidden"
                              animate={isRecording ? {
                                height: [8, 24, 16, 32, 8],
                              } : {}}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1,
                              }}
                            >
                              <motion.div
                                className="w-full h-full bg-primary/40"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <Activity className="w-5 h-5 text-primary" />
                      </div>
                      <audio controls className="hidden" src={audioUrl}>
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-6">
                <h3 className="text-xl font-semibold mb-4">Transcription</h3>
                
                {isRecording ? (
                  <div className="h-[200px] flex items-center justify-center">
                    <motion.div
                      className="flex items-center gap-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-12 bg-primary rounded-full"
                          animate={{ height: [12, 48, 12] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                ) : transcription ? (
                  <div className="bg-muted rounded-xl p-4">
                    <p className="text-sm">{transcription}</p>
                  </div>
                ) : (
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    Record audio to see the transcription
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <AIModelNav />
    </motion.div>
  );
};

export default AudioModel;
