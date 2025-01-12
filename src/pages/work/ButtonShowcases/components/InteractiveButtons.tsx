import { motion } from 'framer-motion';
import { Button } from '../../../../components/ui/Button/button';
import { Bell, Heart, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

const InteractiveButtons = () => {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Interactive Buttons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Like Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button
            size="lg"
            className={`w-full ${liked ? 'bg-pink-500 hover:bg-pink-600' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            {liked ? 'Liked' : 'Like'}
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Toggle like state button
          </p>
        </motion.div>

        {/* Subscribe Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button
            size="lg"
            className={`w-full ${subscribed ? 'bg-red-500 hover:bg-red-600' : ''}`}
            onClick={() => setSubscribed(!subscribed)}
          >
            <Bell className={`mr-2 h-4 w-4 ${subscribed ? 'fill-current' : ''}`} />
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Toggle subscribe state button
          </p>
        </motion.div>

        {/* Follow Button */}
        <motion.div whileHover={{ y: -2 }} className="space-y-2">
          <Button
            size="lg"
            className={`w-full ${followed ? 'bg-green-500 hover:bg-green-600' : ''}`}
            onClick={() => setFollowed(!followed)}
          >
            <ThumbsUp className={`mr-2 h-4 w-4 ${followed ? 'fill-current' : ''}`} />
            {followed ? 'Following' : 'Follow'}
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Toggle follow state button
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveButtons;
