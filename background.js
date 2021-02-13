// import * as tf from "@tensorflow/tfjs";
import * as tf from '@tensorflow/tfjs';


const model = tf.loadLayersModel('/Users/HP-Workstation/PycharmProjects/NLP_ClickBait/modeljs/model.js');
// The minimum prediction confidence.
const threshold = 0.6;
// Which toxicity labels to return.
const labelsToInclude = ['neutral', 'clickbait'];
model.loadLayersModel(threshold, labelsToInclude).then(model => {
    // Now you can use the `model` object to label sentences.
    model.classify([video_title]).then(predictions => {
      console.log('prediction: ' + predictions);
      return true;
  });
});
