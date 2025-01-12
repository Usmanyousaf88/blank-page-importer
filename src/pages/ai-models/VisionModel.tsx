import { motion } from 'framer-motion';
import { Image, Upload, X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import AIModelNav from '../../components/AIModelNav';

const VisionModel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setAnalyzing(true);
    setAnalysis(null);
    
    setTimeout(() => {
      setAnalyzing(false);
      setAnalysis(
        "Analysis complete:\n" +
        "- High-quality image detected\n" +
        "- Objects identified: person, building, nature\n" +
        "- Scene classification: outdoor, daytime\n" +
        "- Dominant colors: blue, green, grey\n" +
        "- Confidence score: 95%"
      );
    }, 2000);
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
          Vision Model Demo
        </h1>
        <div className="rounded-2xl border border-border bg-card p-8">
          <motion.div 
            className="mb-8 text-center" 
            variants={itemVariants}
          >
            <Image className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Vision Model</h1>
            <p className="text-xl text-muted-foreground">
              Upload an image and watch as our AI analyzes and understands its content.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 h-full">
                {selectedImage ? (
                  <div className="relative">
                    <img 
                      src={selectedImage} 
                      alt="Uploaded" 
                      className="w-full h-[300px] object-cover rounded-xl"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center h-[300px] border-2 border-dashed border-primary/20 rounded-xl cursor-pointer hover:border-primary/40 transition-colors">
                    <Upload className="w-12 h-12 text-primary mb-4" />
                    <span className="text-muted-foreground">Click to upload an image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
                {analyzing ? (
                  <div className="flex items-center justify-center h-[300px]">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <span className="text-muted-foreground">Analyzing image...</span>
                    </div>
                  </div>
                ) : analysis ? (
                  <pre className="whitespace-pre-wrap font-mono text-sm">{analysis}</pre>
                ) : (
                  <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                    Upload an image to see the analysis
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

export default VisionModel;
