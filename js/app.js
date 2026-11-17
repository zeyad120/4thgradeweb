// Course and Quiz Data
const COURSES = [
    {
        id: 'av',
        name: 'Artificial Vision',
        code: 'AV401',
        icon: 'eye',
        description: 'Image processing and computer vision',
        quizzes: [
            {
                id: 'av-quiz2',
                title: 'Lecture 1 · Pattern Recognition and AI MCQs for midterm',
                questions: [
                    { question: 'Pattern recognition is best defined as:', options: ['Storing large amounts of data in databases', 'The automatic discovery of regularities in data and using them to take actions such as classification', 'Writing rules by hand for every possible input', 'Compressing images to save memory'], correct: 1, explanation: 'Pattern recognition is the automatic discovery of regularities in data and using them to take actions such as classification.' },
                    { question: 'What is the correct order of the stages after the real world in a pattern recognition system?', options: ['Feature extraction → Sensor → Preprocessing → Classification', 'Sensor → Classification → Preprocessing → Feature extraction', 'Sensor → Preprocessing → Feature extraction → Classification', 'Preprocessing → Sensor → Classification → Feature extraction'], correct: 2, explanation: 'The stages are Sensor → Preprocessing → Feature extraction → Classification.' },
                    { question: 'In the fish-sorting example, which of the following is a feature?', options: ['Salmon', 'Sea bass', 'The conveyor belt', 'Length'], correct: 3, explanation: 'A feature is a measurable property such as length. Salmon and sea bass are classes.' },
                    { question: 'The new fish is 60 cm long with lightness 5.0. What is its feature vector?', options: ['x = [60, 5.0]', 'x = [5.0]', 'x = [Salmon, Sea bass]', 'x = [58, 4.4]'], correct: 0, explanation: 'The feature vector lists the features of one object: [length, lightness].' },
                    { question: 'Using min–max scaling with min length 48 and max length 72, the scaled length of a 60 cm fish is:', options: ['0.25', '0.50', '0.60', '0.83'], correct: 1, explanation: '(60 − 48) / (72 − 48) = 12 / 24 = 0.50.' },
                    { question: 'With k = 3, k-NN classified the new fish as sea bass. What would the prediction be with k = 1?', options: ['Sea bass', 'No decision is possible', 'Salmon', 'Both classes equally'], correct: 2, explanation: 'The single nearest fish is #4 (salmon, distance 0.155).' },
                    { question: 'P(spam) = 0.30, P(free | spam) = 0.60, P(free | normal) = 0.05. What is P(spam | free)?', options: ['0.180', '0.300', '0.600', '0.837'], correct: 3, explanation: '(0.60 × 0.30) / (0.60 × 0.30 + 0.05 × 0.70) = 0.18 / 0.215 = 0.837.' },
                    { question: 'Naive Bayes and Linear Discriminant Analysis (LDA) belong to which group of techniques?', options: ['Statistical methods', 'Deep learning', 'Reinforcement learning', 'Clustering methods'], correct: 0, explanation: 'Both are statistical methods based on probability theory.' },
                    { question: 'Which type of pattern recognition was used in both practical examples (fish and digits)?', options: ['Unsupervised', 'Reinforcement', 'Supervised', 'Semi-supervised'], correct: 2, explanation: 'Every training fish and every training image had a label, so supervised learning was used.' },
                    { question: 'Clustering customer data without labels is an example of:', options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Transfer learning'], correct: 1, explanation: 'Clustering without labels is unsupervised learning.' },
                    { question: 'In the scikit-learn digits dataset, how many numbers (features) describe each image?', options: ['10', '28', '64', '784'], correct: 2, explanation: 'Each image is 8 × 8 = 64 pixel values. 784 is MNIST (28 × 28).' },
                    { question: 'Which method gave the highest test accuracy on the digits in Lecture 1?', options: ['SVM (RBF), 99.4%', 'Naive Bayes, 81.1%', 'Random Forest, 96.1%', 'Neural Net (MLP), 98.1%'], correct: 0, explanation: 'SVM with an RBF kernel reached 99.4%.' },
                    { question: 'In the MLP\'s confusion matrix, what was the most common mistake?', options: ['True 6 predicted as 8', 'True 0 predicted as 4', 'True 9 predicted as 8', 'True 8 predicted as 1 (3 times)'], correct: 3, explanation: 'The cell (true 8, predicted 1) holds 3 errors out of 7 total errors.' },
                    { question: 'The MLP got 353 of 360 test images right. Its accuracy is about:', options: ['95.0%', '98.06%', '99.4%', '100%'], correct: 1, explanation: '353 / 360 = 0.9806, about 98.06%.' },
                    { question: 'Overfitting means that the model:', options: ['Is too simple to learn the training data', 'Has too few parameters', 'Memorises the training data and fails on new data', 'Is trained on too much data'], correct: 2, explanation: 'Overfitting means the model memorizes training data and performs poorly on new data.' }
                ]
            },
            {
                id: 'av-quiz3',
                title: 'Lecture 2 · Research Paper: Early Sepsis Prediction (WOA-Stacking) MCQs for midterm',
                questions: [
                    { question: 'What is the role of the Whale Optimization Algorithm (WOA) in the study?', options: ['Final classification of sepsis', 'Selecting the best subset of features', 'Explaining the model\'s decision', 'Removing noise from images'], correct: 1, explanation: 'WOA searches for a feature subset that keeps good performance with fewer variables.' },
                    { question: 'WOA reduced the features from 25 to 13. What is the percentage reduction?', options: ['13%', '25%', '48%', '52%'], correct: 2, explanation: '(25 − 13) / 25 × 100 = 48%.' },
                    { question: 'Which of the following was NOT one of the base classifiers in the stacking model?', options: ['Decision Tree', 'K-Nearest Neighbors', 'AdaBoost', 'Support Vector Machine'], correct: 3, explanation: 'The base models were Decision Tree, KNN, and AdaBoost.' },
                    { question: 'How does a Stacking ensemble differ from a Voting ensemble?', options: ['Stacking trains a meta-learner on the outputs of the base models', 'Stacking uses only one model', 'Voting needs a meta-learner', 'Stacking ignores the base models\' predictions'], correct: 0, explanation: 'Stacking trains a meta-learner on base model outputs, while voting combines predictions directly.' },
                    { question: 'According to SHAP, which three features most influenced the best model?', options: ['Temperature, heart rate, oxygen saturation', 'Platelets, BUN, systolic blood pressure', 'Creatinine, temperature, heart rate', 'Age, gender, weight'], correct: 1, explanation: 'Platelets, BUN, and systolic blood pressure had the largest SHAP contributions.' },
                    { question: 'F1-score is calculated as:', options: ['(Precision + Recall) / 2', 'Precision × Recall', '2 × (Precision × Recall) / (Precision + Recall)', 'Correct predictions / all cases'], correct: 2, explanation: 'F1 is the harmonic mean of precision and recall.' },
                    { question: 'Recall = 0.977 in the sepsis study means:', options: ['97.7% of all real sepsis cases were detected', '97.7% of the predicted sepsis cases were correct', '97.7% of all patients were healthy', '97.7% of the features were used'], correct: 0, explanation: 'Recall = detected true cases / all true cases.' },
                    { question: 'If the model with 97.6% accuracy is applied to 1,000 patients, about how many predictions are correct?', options: ['24', '97', '976', '1,000'], correct: 2, explanation: '1,000 × 0.976 = 976 correct, about 24 wrong.' },
                    { question: 'Which step would most strengthen the claim that the model is ready for clinical use?', options: ['Reporting accuracy with more decimal places', 'Using more base classifiers', 'Removing all feature selection', 'External validation on an independent dataset'], correct: 3, explanation: 'External validation on an independent dataset is needed to prove clinical readiness.' }
                ]
            },
            {
                id: 'av-quiz4',
                title: 'Lecture 3 · Deep Neural Architectures (CNNs, RNNs and Beyond) MCQs for midterm',
                questions: [
                    { question: 'A neuron has inputs [0.5, −1, 2], weights [0.4, 0.3, 0.1] and bias 0.1. What is ReLU(z)?', options: ['0', '0.2', '0.55', '1.0'], correct: 1, explanation: 'z = 0.2 − 0.3 + 0.2 + 0.1 = 0.2, and ReLU(0.2) = 0.2.' },
                    { question: 'A 3 × 3 filter scans a 6 × 6 image (stride 1, no padding). What is the size of the feature map?', options: ['3 × 3', '4 × 4', '6 × 6', '8 × 8'], correct: 1, explanation: '6 − 3 + 1 = 4.' },
                    { question: 'A window [[2,0,1],[2,0,1],[2,0,1]] is multiplied by a filter with −1, 0, 1 in each row. What are the output and the ReLU result?', options: ['3 and 3', '−3 and −3', '−3 and 0', '0 and 0'], correct: 2, explanation: 'Each row gives −2 + 0 + 1 = −1, so the sum is −3; ReLU sets negatives to 0.' },
                    { question: '2 × 2 max pooling on the block [18, 0, 27, 0] gives:', options: ['0', '11.25', '18', '27'], correct: 3, explanation: 'Max pooling keeps the largest value.' },
                    { question: 'A 4 × 4 feature map goes through 2 × 2 max pooling. The new size is:', options: ['2 × 2', '3 × 3', '4 × 4', '1 × 1'], correct: 0, explanation: 'Pooling halves each dimension.' },
                    { question: 'In a CNN, the early layers usually detect:', options: ['Faces and vehicles', 'Whole objects', 'Edges and colours', 'Class labels'], correct: 2, explanation: 'Early layers detect low-level features like edges and colors; complex objects appear in later layers.' },
                    { question: 'In the RNN example, h(t) = tanh(0.8·x(t) + 0.5·h(t−1)), h(0) = 0, x(1) = 1. What is h(1)?', options: ['0.500', '0.664', '0.800', '1.000'], correct: 1, explanation: 'h(1) = tanh(0.8) = 0.664.' },
                    { question: 'Why does h(3) still depend on x(1) in an RNN?', options: ['Because h(3) is computed from h(2), which came from h(1)', 'Because all inputs are added directly at the end', 'Because the weights are random', 'It does not depend on x(1)'], correct: 0, explanation: 'The hidden state carries memory forward step by step.' },
                    { question: 'If each step multiplies the gradient by 0.5, how much is left after 10 steps?', options: ['0.5', '0.03125', 'About 0.00098 (≈0.1%)', '0'], correct: 2, explanation: '0.5¹⁰ ≈ 0.00098: the vanishing gradient problem.' },
                    { question: 'How many gates does an LSTM cell have?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'An LSTM has forget, input, and output gates. A GRU has 2.' },
                    { question: 'Attention scores for \'The\', \'cat\', \'sat\' are 0.1, 2.0, 1.0. What is the softmax weight of \'cat\'?', options: ['0.099', '0.242', '0.500', '0.659'], correct: 3, explanation: 'exp(2.0) / (1.11 + 7.39 + 2.72) = 7.39 / 11.21 = 0.659.' },
                    { question: 'Which architecture uses attention to read all words at the same time?', options: ['Transformer', 'RNN', 'LSTM', 'LeNet'], correct: 0, explanation: 'The Transformer uses attention to process all words in parallel.' },
                    { question: 'The convolution layer has 8 filters of size 3 × 3, one bias each. How many parameters does it have?', options: ['72', '80', '730', '810'], correct: 1, explanation: '8 × 9 weights + 8 biases = 80.' },
                    { question: 'The flatten layer gives 72 values, followed by a dense layer with 10 outputs. How many parameters does the dense layer have?', options: ['72', '720', '730', '810'], correct: 2, explanation: '72 × 10 weights + 10 biases = 730.' },
                    { question: 'Why does the CNN need about 6 times fewer parameters than the MLP?', options: ['It uses fewer training images', 'It has no biases', 'It skips the softmax', 'One small filter is shared over the whole image (weight sharing)'], correct: 3, explanation: 'Weight sharing lets one filter scan the whole image, reducing parameters from 4,810 to 810.' }
                ]
            },
            {
                id: 'av-quiz5',
                title: 'Lecture 4 · Training Deep Networks That Generalise MCQs for midterm',
                questions: [
                    { question: 'A CNN has 100% training accuracy but 88.6% test accuracy. This gap is a sign of:', options: ['Underfitting', 'Overfitting', 'A learning rate that is too small', 'Data augmentation'], correct: 1, explanation: 'The gap between training and test accuracy indicates overfitting.' },
                    { question: 'The degree-9 polynomial had training error 0.000 and test error 52.7. What does this show?', options: ['A perfect fit to training data can generalise very badly', 'Degree 9 is the best model', 'More parameters always help', 'The test data is wrong'], correct: 0, explanation: 'Perfect training fit can still generalize badly; degree 3 had much lower test error.' },
                    { question: 'What is the cross-entropy loss if p(true class) = 0.25?', options: ['0.25', '0.693', '1.386', '2.303'], correct: 2, explanation: '−ln(0.25) = 1.386.' },
                    { question: 'Gradient descent on f(w) = (w − 3)² with η = 0.5 starts at w₀ = 0. What is w₁?', options: ['0', '1.5', '6', '3'], correct: 3, explanation: 'w₁ = 0 − 0.5 × 2(0 − 3) = 3.' },
                    { question: 'In the same example, what happens with learning rate η = 1.1?', options: ['It converges slowly', 'It diverges', 'It converges in one step', 'It stays at w = 0'], correct: 1, explanation: 'A learning rate that is too large causes divergence.' },
                    { question: 'Dropout with p = 0.5 is applied to [3, 6, 2, 8] with mask [0, 1, 1, 0]. What is the output?', options: ['[0, 12, 4, 0]', '[0, 6, 2, 0]', '[3, 0, 0, 8]', '[6, 12, 4, 16]'], correct: 0, explanation: 'Kept units are scaled by 1/(1 − 0.5) = 2.' },
                    { question: 'Weights [0.5, −2, 1] and λ = 0.5. What is the L2 penalty ½·λ·Σw²?', options: ['0.75', '1.31', '2.63', '5.25'], correct: 1, explanation: 'Σw² = 0.25 + 4 + 1 = 5.25; ½ × 0.5 × 5.25 = 1.31.' },
                    { question: 'Validation loss is lowest at epoch 4 and worse at epochs 5, 6, 7. With patience = 3, early stopping will:', options: ['Stop at epoch 4 and keep training', 'Never stop', 'Stop at epoch 7 and restore the weights of epoch 4', 'Stop at epoch 5'], correct: 2, explanation: 'After 3 epochs without improvement, training stops and the best weights are restored.' },
                    { question: '120 training images are each shifted in 9 ways. How many training views are produced?', options: ['129', '360', '720', '1,080'], correct: 3, explanation: '120 × 9 = 1,080.' },
                    { question: 'Which method raised accuracy on shifted test images from 42.7% to 75.3%?', options: ['Data augmentation', 'L2 weight decay', 'Dropout', 'Early stopping'], correct: 0, explanation: 'Data augmentation teaches the network that position does not matter.' },
                    { question: 'Transfer learning works best when the source task is:', options: ['Small and unrelated', 'Large, diverse and similar to the new task', 'Exactly the same size as the new data', 'Trained without labels only'], correct: 1, explanation: 'Pre-training works best on a large, diverse, related task.' }
                ]
            },
            {
                id: 'av-quiz6',
                title: 'Lecture 5 · Explainable AI in Pattern Recognition MCQs for midterm',
                questions: [
                    { question: 'SHAP, as used in the sepsis study, is best described as a method that is:', options: ['Global and model-specific', 'Global and model-agnostic', 'Local and model-agnostic', 'Local and only for linear models'], correct: 2, explanation: 'SHAP explains single predictions and works with any model that provides inputs and outputs.' },
                    { question: 'Test accuracy is 92%. After shuffling feature X it falls to 70%. What is the permutation importance of X?', options: ['22 points', '70 points', '92 points', '162 points'], correct: 0, explanation: 'Importance = the drop in accuracy: 92 − 70 = 22.' },
                    { question: 'Why can permutation importance underestimate a feature such as \'worst perimeter\'?', options: ['The feature has missing values', 'Shuffling always increases accuracy', 'Correlated features (radius, area) still carry the same information', 'The random forest ignores it'], correct: 2, explanation: 'Correlated features can mask each other\'s importance when one is shuffled.' },
                    { question: 'v(∅) = 0.2, v(A) = 0.5, v(B) = 0.3, v(AB) = 0.8. What are the Shapley values φA and φB?', options: ['φA = 0.3, φB = 0.1', 'φA = 0.4, φB = 0.2', 'φA = 0.5, φB = 0.3', 'φA = 0.6, φB = 0.0'], correct: 1, explanation: 'φA = (0.3 + 0.5)/2 = 0.4; φB = (0.1 + 0.3)/2 = 0.2. They sum to 0.8 − 0.2 = 0.6.' },
                    { question: 'For a linear model with w = 0.5, x = 3 and mean = 1, the SHAP value of x is:', options: ['0.5', '1.5', '2.0', '1.0'], correct: 3, explanation: 'φ = w × (x − mean) = 0.5 × 2 = 1.0.' },
                    { question: 'Covering an image patch drops p(true class) from 0.95 to 0.20. What is the importance of the patch?', options: ['0.75', '0.20', '0.95', '1.15'], correct: 0, explanation: 'Importance = the drop in confidence: 0.95 − 0.20 = 0.75.' },
                    { question: 'LIME explains a prediction by:', options: ['Retraining the whole model from scratch', 'Fitting a simple model to samples near the point being explained', 'Averaging over all orderings of features', 'Randomising the network weights'], correct: 1, explanation: 'LIME fits a simple local model around the point being explained.' },
                    { question: 'In the sanity check, the gradient × input map had a rank correlation of 0.92 between the trained and the random network. What does this mean?', options: ['The map is very reliable', 'The model is perfectly trained', 'The map shows little about what the model learned', 'The random network is accurate'], correct: 2, explanation: 'A high correlation with a random network means the map is not reliable.' },
                    { question: 'In the Clever Hans experiment, the CNN called a real 8 with the tag a \'3\'. What had the network learned?', options: ['A shortcut: \'tag means 3\'', 'Better features for the digit 8', 'To ignore the bottom-left corner', 'Nothing, it was untrained'], correct: 0, explanation: 'The network learned a shortcut based on the tag, which only the explanation revealed.' },
                    { question: 'SHAP shows that platelets matter most to the sepsis model. What can we conclude?', options: ['Low platelets cause sepsis', 'The model will work in every hospital', 'Platelets are the only useful feature', 'The model relies on platelets; causation and outside validity still need checking'], correct: 3, explanation: 'Explanations describe the model, not the world; causation and external validity still need checking.' }
                ]
            }
        ]
    },
    {
        id: 'cp',
        name: 'Cognitive Psychology',
        code: 'CP402',
        icon: 'brain',
        description: 'Study of mental processes and behavior',
        quizzes: [
            {
                id: 'cp-quiz1',
                title: 'Lecture 1 · Psychology of Cognition MCQs for midterm',
                questions: [
                    {
                        question: 'Which of the following best defines cognitive psychology?',
                        options: ['The study of unconscious emotional conflicts and childhood trauma', 'The scientific study of mental processes such as attention, language use, memory, perception, problem solving, creativity, and thinking', 'The physiological study of nerve conduction velocities in peripheral nerves', 'The behavioral analysis of conditioned reflexes in animals'],
                        correct: 1,
                        explanation: 'Cognitive psychology is the scientific study of mental processes including attention, language, memory, perception, problem solving, creativity, and thinking.'
                    },
                    {
                        question: 'Which of the following is NOT listed as one of the core components feeding into Cognitive Psychology?',
                        options: ['Human Intelligence', 'Perception and Attention', 'Autonomic Reflexes', 'Memory, Language, and Thinking & Problem Solving'],
                        correct: 2,
                        explanation: 'The core components are Human Intelligence, Perception, Attention, Memory, Thinking & Problem Solving, and Language — autonomic reflexes are not among them.'
                    },
                    {
                        question: 'Sensory information that has registered in the brain but has NOT yet been interpreted is called:',
                        options: ['Perception', 'Sensation', 'Closure', 'Preparatory set'],
                        correct: 1,
                        explanation: 'Sensation is raw sensory data registered in the brain before interpretation; perception is the interpretation itself.'
                    },
                    {
                        question: 'What is the process by which sensory receptors convert environmental stimuli into neural impulses sent to the brain?',
                        options: ['Organization', 'Transduction', 'Constancy', 'Adaptation'],
                        correct: 1,
                        explanation: 'Transduction is the conversion of physical stimuli (light, sound, etc.) into neural impulses by sensory receptors.'
                    },
                    {
                        question: 'Where does the active interpretation of raw sensory data (perception) take place?',
                        options: ['In the peripheral receptor cells', 'In the spinal cord dorsal horn', 'In the brain', 'In the autonomic ganglia'],
                        correct: 2,
                        explanation: 'Receptors receive stimuli, but perception — the active organization and interpretation of sensory data — occurs in the brain.'
                    },
                    {
                        question: 'Which sequence accurately represents the three perceptual processes?',
                        options: ['Interpretation → Selection → Organization', 'Organization → Interpretation → Selection', 'Selection → Organization → Interpretation', 'Transduction → Adaptation → Constancy'],
                        correct: 2,
                        explanation: 'Perception involves Selection (choosing stimuli), Organization (collecting info into a pattern), and Interpretation (understanding the pattern).'
                    },
                    {
                        question: 'Which of the following is classified as an OBJECTIVE factor affecting perception?',
                        options: ['Motives or needs', 'Past experience', 'Novelty of the stimulus', 'Preparatory set'],
                        correct: 2,
                        explanation: 'Objective factors are physical characteristics of stimuli: intensity, size, distinctness, movement, novelty, duration, repetition, and abrupt change.'
                    },
                    {
                        question: 'Why is a bird about to fly noticed faster than birds sitting quietly on a tree?',
                        options: ['Size constancy', 'Movement as an objective factor', 'Preparatory set', 'Color constancy'],
                        correct: 1,
                        explanation: 'Movement is an objective factor: sudden motion in a still environment is noticed quickly.'
                    },
                    {
                        question: 'What effect does constant repetition of a stimulus have on our perception?',
                        options: ['It always increases brightness and intensity', 'It causes us to adapt to the repeated stimulus', 'It creates a reversible figure-ground illusion', 'It eliminates shape constancy'],
                        correct: 1,
                        explanation: 'Repetition as an objective factor causes us to adapt to the repeated stimulus.'
                    },
                    {
                        question: 'Seeing a moving white line in the sky and guessing it to be an airplane illustrates which subjective factor?',
                        options: ['Age', 'Past experience', 'Abrupt change', 'Duration'],
                        correct: 1,
                        explanation: 'Past experience lets us interpret learned cues — a contrail-like line suggests an airplane.'
                    },
                    {
                        question: 'A person\'s readiness to respond to one specific kind of sensory input rather than others is known as:',
                        options: ['Preparatory set', 'Figure-ground reversal', 'Proximity', 'Apparent movement'],
                        correct: 0,
                        explanation: 'Preparatory set is a subjective factor: readiness to respond to one type of sensory input over others.'
                    },
                    {
                        question: 'In form perception, how is the \'figure\' perceived relative to the \'ground\'?',
                        options: ['Farther away and less distinct than the background', 'Distinct from and closer to the viewer than the background', 'Identical in depth and merged with the background', 'Always moving in the opposite direction of the viewer'],
                        correct: 1,
                        explanation: 'In figure-ground perception, the figure is perceived as distinct from and closer to the viewer than the background.'
                    },
                    {
                        question: 'Which Gestalt principle describes the tendency to group together stimuli that are physically close to one another?',
                        options: ['Closure', 'Similarity', 'Nearness (Proximity)', 'Continuation'],
                        correct: 2,
                        explanation: 'Nearness/proximity: stimuli physically close together tend to be grouped.'
                    },
                    {
                        question: 'The tendency to mentally fill in gaps to perceive an incomplete figure as a finished, consistent unit is called:',
                        options: ['Closure', 'Continuity', 'Similarity', 'Shape constancy'],
                        correct: 0,
                        explanation: 'Closure is the tendency to complete a figure so it has a consistent overall form.'
                    },
                    {
                        question: 'Which Gestalt principle explains grouping elements together because they share the same size, shape, color, or form?',
                        options: ['Nearness', 'Similarity', 'Closure', 'Figure-ground reversal'],
                        correct: 1,
                        explanation: 'Similarity groups stimuli that share size, shape, color, or form.'
                    },
                    {
                        question: 'Judging a friend\'s true height accurately even when they are standing far away in a park demonstrates:',
                        options: ['Shape constancy', 'Color constancy', 'Size constancy', 'Apparent movement'],
                        correct: 2,
                        explanation: 'Size constancy is perceiving an object\'s true size regardless of its distance.'
                    },
                    {
                        question: 'Recognizing a rectangular door as still being rectangular even when it is partially open and casts a trapezoidal image on the retina is an example of:',
                        options: ['Size constancy', 'Shape constancy', 'Color constancy', 'Depth perception'],
                        correct: 1,
                        explanation: 'Shape constancy perceives a known object as keeping its shape regardless of viewing angle.'
                    },
                    {
                        question: 'The ability to view the world in three dimensions and perceive distance is known as:',
                        options: ['Form perception', 'Time perception', 'Depth perception', 'Color constancy'],
                        correct: 2,
                        explanation: 'Depth perception is judging distance in three dimensions (tested by the visual cliff experiment).'
                    },
                    {
                        question: 'When riding in a moving vehicle and looking out the side window, very distant objects such as the moon and sun appear to:',
                        options: ['Move rapidly in the opposite direction', 'Move in the same direction as the viewer', 'Shrink due to loss of size constancy', 'Disappear into the background'],
                        correct: 1,
                        explanation: 'Very distant objects appear to move in the same direction as the viewer, unlike nearby objects.'
                    },
                    {
                        question: 'Movement perceived in the absence of actual physical movement of an image across the retina (e.g., rapid succession of motionless stimuli) is termed:',
                        options: ['Real movement', 'Apparent movement', 'Preparatory movement', 'Transduction'],
                        correct: 1,
                        explanation: 'Apparent movement is perceived motion without physical retinal movement, produced by rapid still images.'
                    }
                ]
            }
        ]
    },
    {
        id: 'dss',
        name: 'Decision Support System',
        code: 'DSS403',
        icon: 'bar-chart-2',
        description: 'Systems to assist in decision making',
        quizzes: [
            {
                id: 'dss-quiz1',
                title: 'Lecture 1 — Systems, Information, and DSS Foundations MCQs for midterm',
                questions: [
                    { question: 'A system is best defined as:', options: ['A database shared by several applications', 'A single computer program that processes data', 'A collection of raw facts', 'An interrelated set of components designed to achieve a predefined purpose'], correct: 3, explanation: 'A system is an interrelated set of components designed to achieve a predefined purpose.' },
                    { question: 'What separates a system from its environment?', options: ['The user interface', 'An imaginary boundary', 'The database', 'The feedback loop'], correct: 1, explanation: 'A system is separated from its environment by an imaginary boundary.' },
                    { question: 'Feedback is:', options: ['A report sent to the government', 'An output from a system that later re-enters it as an input to control its operation', 'A type of database', 'An input that comes only from customers'], correct: 1, explanation: 'Feedback is an output that re-enters the system as input to control its operation.' },
                    { question: 'In the room thermostat example, the target is 22 °C and the sensor reads 19 °C. What happens?', options: ['The target is changed to 19 °C', 'Nothing, the system has no feedback', 'The heater turns OFF', 'The heater turns ON'], correct: 3, explanation: 'Since 19 °C is below the 22 °C target, feedback turns the heater ON.' },
                    { question: 'In the bank loan example, which part did the lecture say some people call "the actual DSS"?', options: ['The formal letter to the customer', 'The customer\'s request', 'The loan committee', 'The loan approval model built into a computerized decision aid'], correct: 3, explanation: 'Some consider the loan approval model inside the computerized decision aid to be the actual DSS.' },
                    { question: 'At the technical level, DSS designers focus on:', options: ['The data, the models, and the user interface', 'The loan committee', 'Government regulations', 'People doing non-computerized tasks'], correct: 0, explanation: 'At the technical level, designers focus on data, models, and the user interface.' },
                    { question: '"The temperature is 38.9 °C" is an example of:', options: ['Decision', 'Data', 'Information', 'Knowledge'], correct: 2, explanation: 'A measured value with context is information; data is a raw fact.' },
                    { question: '"Above 38 °C is a fever" represents which level in the data-to-decision chain?', options: ['Decision', 'Information', 'Knowledge', 'Data'], correct: 2, explanation: 'Rules and relationships derived from information represent knowledge.' },
                    { question: 'Moving computing from centralized mainframes to networked microcomputers (client/server) is called:', options: ['Prototyping', 'Feedback', 'Data warehousing', 'Downsizing'], correct: 3, explanation: 'Downsizing refers to moving from mainframes to networked smaller computers.' },
                    { question: 'The information quality attribute meaning "does not include elements the user does not need" is:', options: ['Timely', 'Concise', 'Relevant', 'Complete'], correct: 1, explanation: 'Concise means the information includes only what is needed.' },
                    { question: 'Effectiveness answers which question?', options: ['Are we doing the right things?', 'How fast is the system?', 'Are we doing things right?', 'How many resources did we use?'], correct: 0, explanation: 'Effectiveness is doing the right things; efficiency is doing things right.' },
                    { question: 'Two clinics each treat 100 patients a day. Clinic A uses 10 staff and Clinic B uses 7. Which statement is correct?', options: ['Clinic A is more efficient', 'Clinic B is more effective', 'Clinic B is more efficient', 'Both are equally efficient'], correct: 2, explanation: 'Both are equally effective (same output); Clinic B is more efficient (fewer resources).' },
                    { question: 'Which of the following is NOT one of the five components of an information system?', options: ['Human resources', 'Hardware', 'Procedures', 'Feedback'], correct: 3, explanation: 'The five components are people, hardware, software, data, and procedures.' },
                    { question: 'Databases are managed by systems software known as:', options: ['TPS', 'EIS', 'DBMS', 'OIS'], correct: 2, explanation: 'A DBMS (Database Management System) manages databases.' },
                    { question: 'Which statement best describes a DSS?', options: ['It only processes daily transactions', 'It replaces human judgment for structured decisions', 'It supports semi-structured or unstructured decisions by combining data, models, and an interactive interface', 'It is used only by executives'], correct: 2, explanation: 'A DSS supports semi-structured or unstructured decisions using data, models, and an interactive interface.' },
                    { question: 'In the loan example (income 20,000 EGP, existing debt 4,000 EGP, new payment ≈ 6,673 EGP), the DTI is:', options: ['45.0%', '42.2%', '53.4%', '33.4%'], correct: 2, explanation: 'DTI = (4,000 + 6,673) / 20,000 = 10,673 / 20,000 = 53.4%.' },
                    { question: 'Why was Customer A\'s 300,000 EGP loan referred/rejected?', options: ['DTI exceeded the 45% rule', 'Credit score was below 700', 'Employment was less than 2 years', 'Income was below 20,000 EGP'], correct: 0, explanation: 'The DTI of 53.4% exceeded the 45% rule, so the loan was referred.' },
                    { question: 'In the loan payment formula, the monthly rate r for a 12% annual interest is:', options: ['0.12', '1.2', '0.01', '0.10'], correct: 2, explanation: 'Monthly rate = 12% / 12 = 1% = 0.01.' },
                    { question: 'When the requested loan was reduced to 200,000 EGP, the DTI became 42.2%. This illustrates:', options: ['What-if analysis', 'Data mining', 'Feedback control', 'Downsizing'], correct: 0, explanation: 'Changing an input to see the effect on the output is what-if analysis.' },
                    { question: 'In the supplier selection example, the weighted scores were:', options: ['A = 8.0, B = 7.0', 'A = 7.4, B = 8.2', 'A = 7.9, B = 7.5', 'A = 7.5, B = 7.9'], correct: 3, explanation: 'Supplier B scored 7.9 vs Supplier A\'s 7.5.' },
                    { question: 'Which is listed as a limitation of a DSS?', options: ['Supports what-if analysis', 'Helps managers explore alternatives', 'Output quality depends on data quality', 'Combines data with analytical models'], correct: 2, explanation: 'A DSS limitation is that output quality depends on the quality of input data.' }
                ]
            },
            {
                id: 'dss-quiz2',
                title: 'Lecture 2 — DSS Types, Architecture, and Group DSS MCQs for midterm',
                questions: [
                    { question: 'Power\'s classification groups DSS by:', options: ['The dominant component they rely on most', 'The programming language used', 'The size of the organization', 'The number of users'], correct: 0, explanation: 'Power classifies DSS by the dominant component: data-driven, model-driven, knowledge-driven, document-driven, or communication-driven.' },
                    { question: 'A DSS built around an optimization or simulation model that users manipulate to explore "what happens if" is:', options: ['Data-driven', 'Document-driven', 'Communication-driven', 'Model-driven'], correct: 3, explanation: 'Model-driven DSS are built around models that users manipulate for what-if analysis.' },
                    { question: 'Sales analysis by region using OLAP, dashboards, and data mining is typical of a:', options: ['Model-driven DSS', 'Data-driven DSS', 'Document-driven DSS', 'Knowledge-driven DSS'], correct: 1, explanation: 'Data-driven DSS rely on databases, data warehouses, OLAP, and data mining.' },
                    { question: 'A Group DSS (GDSS) for a strategic planning meeting is an example of a:', options: ['Knowledge-driven DSS', 'Data-driven DSS', 'Communication-driven DSS', 'Document-driven DSS'], correct: 2, explanation: 'GDSS supports group communication and collaboration, making it communication-driven.' },
                    { question: 'Searching legal case files or policy documents to support a ruling is an example of a:', options: ['Model-driven DSS', 'Communication-driven DSS', 'Data-driven DSS', 'Document-driven DSS'], correct: 3, explanation: 'Document-driven DSS manage unstructured documents like legal files and policies.' },
                    { question: 'A diagnostic aid that recommends tests from reported symptoms is a:', options: ['Knowledge-driven DSS', 'Data-driven DSS', 'Communication-driven DSS', 'Document-driven DSS'], correct: 0, explanation: 'Knowledge-driven DSS use rules and expert knowledge, like a diagnostic system.' },
                    { question: 'Which DSS subsystem is described as optional?', options: ['Data management', 'Knowledge-based management', 'Model management', 'Dialog (user interface)'], correct: 1, explanation: 'The knowledge-based subsystem is optional; the others are essential.' },
                    { question: 'The subsystem that stores and manages a "model base" is the:', options: ['MBMS', 'Dialog subsystem', 'Explanation facility', 'DBMS'], correct: 0, explanation: 'The Model Base Management System (MBMS) stores and manages models.' },
                    { question: 'Which subsystem is called the "front door" of the DSS?', options: ['Knowledge-based', 'Dialog / user interface', 'Model management', 'Data management'], correct: 1, explanation: 'The dialog subsystem (user interface) is the front door of the DSS.' },
                    { question: 'In the knowledge-based subsystem, the component that applies rules to the current case is the:', options: ['Data warehouse', 'Inference engine', 'Rule base', 'Explanation facility'], correct: 1, explanation: 'The inference engine applies rules to the current case.' },
                    { question: 'Which component shows why a recommendation was made?', options: ['Data warehouse', 'Model base', 'Inference engine', 'Explanation facility'], correct: 3, explanation: 'The explanation facility shows why a recommendation was made.' },
                    { question: 'In a GDSS, anonymous voting is used mainly to:', options: ['Replace the decision-maker', 'Increase the number of ideas', 'Speed up the database', 'Reduce pressure to conform'], correct: 3, explanation: 'Anonymous voting reduces pressure to conform to dominant group members.' },
                    { question: 'Which system is mainly used by executives to monitor overall performance?', options: ['DSS', 'TPS', 'EIS', 'Expert System'], correct: 2, explanation: 'An Executive Information System (EIS) is used by executives for high-level monitoring.' },
                    { question: 'The most common approach for building a DSS, since requirements are often unclear at first, is:', options: ['End-user development only', 'Outsourcing', 'Traditional waterfall', 'Iterative prototyping'], correct: 3, explanation: 'Iterative prototyping is preferred because DSS requirements are often unclear initially.' },
                    { question: 'In the admission DSS, Applicant X scored 7.99. With the rule ≥ 7.5 → Admit, the decision is:', options: ['Waitlist', 'Admit', 'Reject', 'Refer'], correct: 1, explanation: '7.99 ≥ 7.5, so Applicant X is admitted.' },
                    { question: 'Applicant Y scored 0.4(6.5) + 0.3(6.0) + 0.15(8.0) + 0.15(7.0). The score and decision are:', options: ['6.40 → Reject', '6.65 → Reject', '7.50 → Admit', '6.65 → Waitlist'], correct: 3, explanation: 'Score = 6.65, which falls in the waitlist range (6.5–7.5).' },
                    { question: 'When GPA weight rose to 50% and exam weight fell to 20%, the admission outcomes:', options: ['Both changed', 'Only X changed', 'Stayed the same, showing the decision is not overly sensitive', 'Only Y changed'], correct: 2, explanation: 'Outcomes stayed the same, showing the decision is not overly sensitive to weight changes.' },
                    { question: 'Why is university admission a good DSS example?', options: ['It is semi-structured: clear criteria but weighting is a judgment call', 'It is fully structured', 'It is unstructured with no criteria', 'It needs no data'], correct: 0, explanation: 'Admission is semi-structured — criteria are clear but weighting involves judgment.' }
                ]
            },
            {
                id: 'dss-quiz3',
                title: 'Lecture 3 — Early Sepsis Prediction (WOA + Stacking + SHAP) MCQs for midterm',
                questions: [
                    { question: 'What is the role of the Whale Optimization Algorithm (WOA) in this study?', options: ['Directly predicting sepsis', 'Feature selection', 'Explaining the model\'s decisions', 'Collecting patient data'], correct: 1, explanation: 'WOA performs feature selection, choosing the best subset of features.' },
                    { question: 'How many features did WOA select out of the original 25?', options: ['12', '13', '10', '25'], correct: 1, explanation: 'WOA selected 13 features out of 25.' },
                    { question: 'The percentage reduction in the number of features was:', options: ['52%', '48%', '25%', '13%'], correct: 1, explanation: '(25 − 13) / 25 = 48% reduction.' },
                    { question: 'Which of the following was NOT one of the base classifiers?', options: ['K-Nearest Neighbors', 'Decision Tree', 'AdaBoost', 'Support Vector Machine'], correct: 3, explanation: 'The base classifiers were KNN, Decision Tree, and AdaBoost — not SVM.' },
                    { question: 'In Stacking Ensemble, the outputs of the base models are used as inputs to a:', options: ['Database', 'Feature selector', 'Voting rule', 'Meta-learner'], correct: 3, explanation: 'Stacking feeds base model outputs into a meta-learner.' },
                    { question: 'What is the main difference between Voting and Stacking?', options: ['There is no difference', 'Stacking trains a meta-learner to learn how to use base-model outputs', 'Voting uses one model only', 'Stacking combines predictions directly by majority vote'], correct: 1, explanation: 'Stacking learns to combine base outputs via a meta-learner; voting combines them directly.' },
                    { question: 'SHAP stands for:', options: ['Statistical Hybrid Algorithm Prediction', 'Simple Heuristic Analysis Process', 'Sepsis Health Assessment Protocol', 'SHapley Additive exPlanations'], correct: 3, explanation: 'SHAP = SHapley Additive exPlanations.' },
                    { question: 'According to SHAP, which feature was among the most influential?', options: ['Platelet count', 'Heart rate variability', 'Gender', 'Age'], correct: 0, explanation: 'Platelet count was among the most influential features per SHAP.' },
                    { question: 'Which algorithm was NOT among those WOA was compared with?', options: ['Bat Algorithm', 'Harris Hawks Optimization', 'Grey Wolf Optimizer', 'Genetic Algorithm'], correct: 3, explanation: 'WOA was compared with Bat, HHO, and GWO — not Genetic Algorithm.' },
                    { question: 'If the model with 97.6% accuracy is applied to 1000 patients, the approximate number of correct predictions is:', options: ['97', '900', '24', '976'], correct: 3, explanation: '1000 × 0.976 = 976 correct predictions.' },
                    { question: 'The F1-score combines:', options: ['Precision and recall', 'Features and labels', 'Sensitivity and specificity', 'Accuracy and specificity'], correct: 0, explanation: 'F1-score is the harmonic mean of precision and recall.' },
                    { question: 'Recall = 0.977 means the model:', options: ['Was correct in 97.7% of its positive predictions', 'Had 97.7% accuracy', 'Detected 97.7% of the actual sepsis cases', 'Used 97.7% of the features'], correct: 2, explanation: 'Recall measures the fraction of actual positive cases detected.' },
                    { question: 'Why is accuracy alone not always enough in a medical context?', options: ['Because SHAP replaces accuracy', 'Because accuracy is hard to compute', 'Because of class imbalance; precision, recall, and F1 should also be checked', 'Because doctors do not use numbers'], correct: 2, explanation: 'Class imbalance can make accuracy misleading; precision, recall, and F1 give a fuller picture.' },
                    { question: 'Which is required before judging a model ready for clinical use?', options: ['External validation on an independent dataset', 'Only a high accuracy', 'More base classifiers', 'Fewer patients'], correct: 0, explanation: 'External validation on independent data is needed before clinical use.' },
                    { question: 'WOA is inspired by:', options: ['Ant colonies', 'Bee pollination', 'Bird flocking', 'The hunting behavior of whales'], correct: 3, explanation: 'WOA is inspired by the bubble-net hunting behavior of whales.' }
                ]
            },
            {
                id: 'dss-quiz4',
                title: 'Lecture 4 — Building, Testing, and Deploying a DSS MCQs for midterm',
                questions: [
                    { question: 'What is the first step in building a DSS prototype?', options: ['Choose the data', 'Define the decision', 'Test and iterate', 'Design the interface'], correct: 1, explanation: 'The first step is to define the decision the DSS will support.' },
                    { question: 'The correct order of the five prototyping steps is:', options: ['Model → Data → Define → Test → UI', 'Define → Model → Data → Test → UI', 'Data → Define → Model → UI → Test', 'Define → Data → Model → UI → Test'], correct: 3, explanation: 'The order is: Define the decision → Choose data → Build model → Design UI → Test and iterate.' },
                    { question: 'A credit score threshold (≥ 700) is an example of which model type?', options: ['Weighted scoring', 'Rule-based (IF-THEN)', 'Simulation', 'Statistical forecasting'], correct: 1, explanation: 'A threshold rule is a rule-based (IF-THEN) model.' },
                    { question: 'Demand forecasting from historical data is an example of a:', options: ['Weighted scoring model', 'Statistical / forecasting model', 'Rule-based model', 'Communication-driven DSS'], correct: 1, explanation: 'Forecasting from historical data is a statistical/forecasting model.' },
                    { question: 'Which interface guideline was recommended?', options: ['Show only the final decision', 'Show the inputs, the result, and the reason on one screen', 'Use as many screens as possible', 'Hide the logic to keep the screen clean'], correct: 1, explanation: 'Show inputs, result, and reasoning on one screen for transparency.' },
                    { question: 'Which tool is described as fast to build and easy for non-programmers?', options: ['Python', 'Tableau', 'R', 'Spreadsheets (Excel, Google Sheets)'], correct: 3, explanation: 'Spreadsheets are fast to build and accessible to non-programmers.' },
                    { question: 'In the formula =IF(AND(B2>=110%, C2>=90), "High", ...), the AND function means:', options: ['At least one condition is true', 'The conditions are ignored', 'No condition is true', 'All listed conditions must be true together'], correct: 3, explanation: 'AND requires all listed conditions to be true simultaneously.' },
                    { question: 'Employee B has Sales 102% and Quality 78. Under the original rules, the tier is:', options: ['High', 'Medium', 'Low', 'None'], correct: 2, explanation: 'Quality 78 < 80 fails the Medium threshold, so Employee B is Low tier.' },
                    { question: 'Employee D has Sales 88% and Quality 70. The bonus is:', options: ['15%', '3%', '0%', '8%'], correct: 2, explanation: 'Sales 88% < 90% fails all tiers, so bonus is 0%.' },
                    { question: 'If the Medium tier quality threshold is lowered from 80 to 75, Employee B (Quality 78) moves to:', options: ['High (15%)', 'Medium (8%)', 'Low (3%)', 'None (0%)'], correct: 1, explanation: 'With threshold 75, Quality 78 qualifies for Medium tier (8% bonus).' },
                    { question: 'Running past real cases to see if the DSS matches what actually happened is called:', options: ['Face validity', 'Sensitivity analysis', 'Historical validity', 'Edge-case testing'], correct: 2, explanation: 'Historical validity tests the DSS against past real cases.' },
                    { question: 'Testing empty, zero, or very large input values is called:', options: ['Historical validity', 'Prototyping', 'Edge cases', 'Face validity'], correct: 2, explanation: 'Edge-case testing checks boundary and extreme inputs.' },
                    { question: '"Garbage in, garbage out" refers to which pitfall?', options: ['A hidden black box', 'Over-complicating v1', 'Trusting bad data', 'Skipping real users'], correct: 2, explanation: 'GIGO means poor-quality input data produces poor output.' },
                    { question: 'The ethical principle stating that a person, not the system, remains responsible for the final decision is:', options: ['Fairness', 'Privacy', 'Transparency', 'Accountability'], correct: 3, explanation: 'Accountability keeps the human responsible for the final decision.' },
                    { question: 'During the Monitor stage of deployment, you should track:', options: ['How often users agree with or override the recommendation', 'The number of spreadsheet rows', 'The color of the dashboard', 'Only the hardware cost'], correct: 0, explanation: 'Monitoring tracks user agreement and overrides of recommendations.' },
                    { question: 'Why was a rule-based DSS chosen for the employee bonus case?', options: ['HR policy already states clear tiers and thresholds, so it is easy to audit', 'It is the most complex model', 'Weighted scoring is not allowed', 'There was no data'], correct: 0, explanation: 'Clear HR policy rules make a rule-based DSS easy to build and audit.' }
                ]
            },
            {
                id: 'dss-quiz5',
                title: 'Lecture 5 — Decisions Under Uncertainty MCQs for midterm',
                questions: [
                    { question: 'In the payoff table, the probabilities of strong, medium, and weak demand must:', options: ['Be equal', 'Be greater than 0.5', 'Sum to 100', 'Sum to 1'], correct: 3, explanation: 'Probabilities in a decision problem must sum to 1.' },
                    { question: 'The expected value (EV) of an option is calculated as:', options: ['The maximum payoff', 'The sum of probability × payoff', 'The average of payoffs without probabilities', 'The minimum payoff'], correct: 1, explanation: 'EV = Σ(probability × payoff) across all states.' },
                    { question: 'The EV of Option A (Full launch: +200, +80, −100 with P = 0.3, 0.5, 0.2) is:', options: ['+180', '+60', '+80', '+39'], correct: 2, explanation: 'EV = 0.3(200) + 0.5(80) + 0.2(−100) = 60 + 40 − 20 = +80.' },
                    { question: 'The EV of Option B (Small pilot: +70, +40, −10) is:', options: ['+80', '+39', '+100', '+21'], correct: 1, explanation: 'EV = 0.3(70) + 0.5(40) + 0.2(−10) = 21 + 20 − 2 = +39.' },
                    { question: 'In a decision tree, a square represents:', options: ['A decision node', 'A probability', 'A chance node', 'A payoff'], correct: 0, explanation: 'Squares are decision nodes; circles are chance nodes.' },
                    { question: 'In a decision tree, a circle represents:', options: ['A chance node', 'The decision-maker', 'A decision node', 'The final payoff'], correct: 0, explanation: 'Circles represent chance nodes where uncertain events occur.' },
                    { question: 'Decision trees are solved by:', options: ['Picking a random branch', 'Rolling forward from left to right', 'Rolling back from right to left', 'Choosing the lowest payoff'], correct: 2, explanation: 'Decision trees are solved by rolling back from the end, computing EV at each node.' },
                    { question: 'In the sensitivity analysis, the lines for Full launch and Pilot cross at P(weak) ≈:', options: ['45%', '60%', '20%', '30%'], correct: 0, explanation: 'The EV lines cross at about P(weak) = 45%.' },
                    { question: 'If P(weak) rises above about 45%, the recommended option becomes:', options: ['A. Full launch', 'B. Small pilot', 'C. Do nothing', 'No change'], correct: 1, explanation: 'Above 45% weak demand, the pilot has higher EV, so it is recommended.' },
                    { question: 'Price = $50, variable cost = $30, fixed cost = $40,000. The break-even point is:', options: ['1,333 units', '4,000 units', '2,000 units', '800 units'], correct: 2, explanation: 'BEP = Fixed cost / (Price − Variable cost) = 40,000 / 20 = 2,000 units.' },
                    { question: 'The maximin criterion selects the option with the:', options: ['Smallest maximum regret', 'Best average', 'Best worst case', 'Highest payoff'], correct: 2, explanation: 'Maximin picks the option with the best worst-case payoff (max of minimums).' },
                    { question: 'Using maximin on the product-launch table, which option is chosen?', options: ['A. Full launch', 'B. Small pilot', 'C. Do nothing', 'A and B tie'], correct: 2, explanation: 'Do nothing has the best worst case (0 loss), so maximin chooses it.' },
                    { question: 'Regret is defined as:', options: ['The best payoff in that state minus the payoff of the chosen option', 'The worst payoff of an option', 'Payoff minus probability', 'EV minus the minimum payoff'], correct: 0, explanation: 'Regret = best possible payoff in that state − actual payoff of chosen option.' },
                    { question: 'Using minimax regret, the maximum regrets are A = 100, B = 130, C = 200. Which option is chosen?', options: ['A', 'B', 'C', 'None'], correct: 0, explanation: 'Minimax regret chooses the option with the smallest maximum regret: A (100).' },
                    { question: 'In the spreadsheet, which formula computes the EV for each option?', options: ['=MIN(B3:D3)', '=SUM(B2:D2)', '=MAX(E3:E5)', '=SUMPRODUCT(B$2:D$2,B3:D3)'], correct: 3, explanation: 'SUMPRODUCT multiplies probabilities by payoffs and sums them — the EV formula.' },
                    { question: 'What is the main weakness of relying on EV alone?', options: ['It is hard to calculate', 'It ignores risk (e.g., the −100 worst case)', 'It needs no probabilities', 'It always picks doing nothing'], correct: 1, explanation: 'EV ignores risk — an option with a bad worst case can still have high EV.' }
                ]
            },
            {
                id: 'dss-quiz6',
                title: 'Lecture 6 — Multi-Criteria Decisions MCQs for midterm',
                questions: [
                    { question: 'MCDM stands for:', options: ['Model-Controlled Data Management', 'Multiple Computer Decision Models', 'Managerial Cost Decision Method', 'Multi-Criteria Decision Making'], correct: 3, explanation: 'MCDM = Multi-Criteria Decision Making.' },
                    { question: 'Monthly rent in the site-selection problem is a:', options: ['Benefit criterion (higher is better)', 'Neutral criterion', 'Probability', 'Cost criterion (lower is better)'], correct: 3, explanation: 'Rent is a cost criterion — lower is better.' },
                    { question: 'Why must data be normalized before combining criteria?', options: ['To increase the weights', 'To remove the cost criteria', 'To make the numbers larger', 'Because criteria use different units that cannot be added directly'], correct: 3, explanation: 'Normalization puts criteria on a common scale so different units can be combined.' },
                    { question: 'The min–max formula for a benefit criterion is:', options: ['(max − x) ÷ (max − min)', '(x − max) ÷ min', '(x − min) ÷ (max − min)', 'x ÷ min'], correct: 2, explanation: 'For benefit criteria, normalized value = (x − min) / (max − min).' },
                    { question: 'The normalized rent value for the Mall: (6,000 − 4,500) ÷ (6,000 − 2,000) equals:', options: ['0.38', '0.50', '0.25', '0.75'], correct: 0, explanation: 'For a cost criterion, normalized = (max − x) / (max − min) = 1,500 / 4,000 = 0.375 ≈ 0.38.' },
                    { question: 'On the Saaty scale, a value of 5 means:', options: ['Strongly more important', 'Extremely more important', 'Moderately more important', 'Equally important'], correct: 0, explanation: 'On the Saaty AHP scale, 5 = strongly more important.' },
                    { question: 'If traffic vs. rent is rated 2 in AHP, then rent vs. traffic is:', options: ['4', '−2', '1/2', '2'], correct: 2, explanation: 'AHP uses reciprocal values: if A/B = 2, then B/A = 1/2.' },
                    { question: 'In AHP, the consistency ratio (CR) must be below:', options: ['0.50', '1.00', '0.10', '0.01'], correct: 2, explanation: 'CR must be below 0.10 (10%) for acceptable consistency.' },
                    { question: 'The AHP weight obtained for foot traffic was:', options: ['0.28', '0.47', '0.09', '0.16'], correct: 1, explanation: 'Foot traffic received the highest AHP weight: 0.47.' },
                    { question: 'In AHP, a criterion\'s weight is obtained by:', options: ['Summing the column', 'Multiplying all cells', 'Taking the largest value in the row', 'Normalizing each column then averaging each row'], correct: 3, explanation: 'AHP weights: normalize each column, then average across rows.' },
                    { question: 'Which site won with the AHP weights?', options: ['Downtown (0.47)', 'Mall (0.63)', 'Suburb (0.51)', 'A tie between Mall and Suburb'], correct: 1, explanation: 'The Mall won with the highest weighted score of 0.63.' },
                    { question: 'With equal weights (25% each), which site would win?', options: ['Mall', 'Downtown', 'Suburb', 'No site'], correct: 2, explanation: 'With equal weights, Suburb wins.' },
                    { question: 'The Mall wins when the traffic weight is between:', options: ['36% and 68%', '0% and 36%', '68% and 100%', '45% and 90%'], correct: 0, explanation: 'Sensitivity analysis shows Mall wins when traffic weight is 36–68%.' },
                    { question: 'Counting both "foot traffic" and "sales potential" as criteria is a pitfall called:', options: ['Rank reversal', 'Double counting', 'Biased weights', 'Compensation'], correct: 1, explanation: 'Including correlated criteria that measure the same thing is double counting.' },
                    { question: 'Adding or removing a site changes min and max and can reorder the other sites. This is called:', options: ['Rank reversal', 'Consistency', 'Double counting', 'Compensation'], correct: 0, explanation: 'Rank reversal occurs when adding/removing alternatives changes the ranking.' },
                    { question: 'The weighted-sum model used to combine normalized values is also known as:', options: ['Expected value', 'Simple Additive Weighting (SAW)', 'Decision tree', 'Maximin'], correct: 1, explanation: 'The weighted sum of normalized values is Simple Additive Weighting (SAW).' }
                ]
            }
        ]
    },
    {
        id: 'iot',
        name: 'Internet of Things',
        code: 'IOT404',
        icon: 'wifi',
        description: 'Connected devices and smart networks',
        quizzes: [
            {
                id: 'iot-quiz1',
                title: 'Lec-1 MCQs for midterm (Part 1: Introduction to IoT & Characteristics)',
                questions: [
                    { question: 'What does IoT stand for?', options: ['Internet of Technology', 'Internet of Things', 'Integration of Things', 'Information of Technology'], correct: 1, explanation: 'IoT stands for Internet of Things. It refers to a network of physical and virtual objects connected through the Internet to exchange data.' },
                    { question: 'Which of the following best describes the formal definition of IoT?', options: ['A network used only for connecting computers.', 'A global network infrastructure with self-configuring capabilities and interoperable communication protocols.', 'A system used only for data storage.', 'A communication system that works without protocols.'], correct: 1, explanation: 'IoT is defined as a dynamic global network infrastructure with self-configuring capabilities based on standard and interoperable communication protocols.' },
                    { question: 'What does the Dynamic Global Network characteristic of IoT mean?', options: ['Devices never change their configurations.', 'Devices adapt to changes in their context.', 'Devices operate without communication.', 'Devices must always be manually controlled.'], correct: 1, explanation: 'Dynamic global networks are capable of adapting to changes in their surrounding context and operating conditions.' },
                    { question: 'Which characteristic allows IoT devices to fetch the latest software updates without manual intervention?', options: ['Unique Identity', 'Interoperability', 'Self-Configuring', 'Data Storage'], correct: 2, explanation: 'Self-configuration allows devices to configure themselves automatically, such as downloading and installing software updates.' },
                    { question: 'What is meant by Interoperable Communication Protocols?', options: ['Devices communicate using only one protocol.', 'Devices can communicate through various protocols.', 'Devices cannot exchange data.', 'Devices operate independently without networks.'], correct: 1, explanation: 'Interoperability allows different devices and systems to communicate using different standard communication protocols.' },
                    { question: 'Which of the following can provide a unique identity to an IoT device?', options: ['RAM', 'Unique IP Address or URI', 'Battery capacity', 'Operating temperature'], correct: 1, explanation: 'Every IoT thing can have a unique identity, such as a unique IP address or a URI.' },
                    { question: 'What is the purpose of integrating IoT devices into an Information Network?', options: ['To prevent communication between devices.', 'To allow communication and data exchange for analysis.', 'To increase device weight.', 'To eliminate sensors.'], correct: 1, explanation: 'Integration into an information network allows devices to exchange information and perform certain analyses.' },
                    { question: 'The physical design of IoT mainly consists of:', options: ['Applications and databases only.', 'Things in IoT and IoT protocols.', 'Security and management only.', 'Cloud computing and big data only.'], correct: 1, explanation: 'According to the lecture, physical design includes two main components: Things in IoT and IoT Protocols.' },
                    { question: 'Which of the following is NOT listed as a possible interface in a generic IoT device?', options: ['I/O interfaces for sensors', 'Internet connectivity interfaces', 'Memory and storage interfaces', 'Banking interfaces'], correct: 3, explanation: 'The lecture lists sensor I/O, Internet connectivity, memory and storage, and audio/video interfaces.' },
                    { question: 'Which IEEE standard represents Ethernet?', options: ['802.11', '802.3', '802.16', '802.15.4'], correct: 1, explanation: 'IEEE 802.3 is the standard associated with Ethernet technology.' },
                    { question: 'Which IEEE standard represents Wi-Fi?', options: ['802.3', '802.16', '802.11', '802.15.4'], correct: 2, explanation: 'IEEE 802.11 represents wireless LAN technologies, commonly known as Wi-Fi.' },
                    { question: 'Which IEEE standard is associated with WiMAX?', options: ['802.16', '802.11', '802.3', '802.15.4'], correct: 0, explanation: 'IEEE 802.16 represents WiMAX, a collection of wireless broadband standards.' },
                    { question: 'Which standard represents Low-Rate Wireless Personal Area Networks (LR-WPAN)?', options: ['802.3', '802.11', '802.15.4', '802.16'], correct: 2, explanation: 'IEEE 802.15.4 is designed for Low-Rate Wireless Personal Area Networks and is suitable for many IoT applications.' },
                    { question: 'Which Ethernet standard uses fiber optic technology at 10 Gbit/s according to the lecture?', options: ['802.3', '802.3.i', '802.3.j', '802.3.ae'], correct: 3, explanation: 'IEEE 802.3ae specifies 10 Gigabit Ethernet over fiber.' },
                    { question: 'Which Wi-Fi standard operates in the 5 GHz band?', options: ['802.11a', '802.11b', '802.11g', '802.11b and 802.11g'], correct: 0, explanation: 'According to the lecture, 802.11a operates in the 5 GHz band, while 802.11b and 802.11g operate in the 2.4 GHz band.' },
                    { question: 'Which Wi-Fi standard operates in both 2.4 GHz and 5 GHz bands?', options: ['802.11a', '802.11b', '802.11n', '802.11ac'], correct: 2, explanation: 'IEEE 802.11n supports both 2.4 GHz and 5 GHz bands.' },
                    { question: 'What is the main advantage of Zigbee compared with Wi-Fi according to the lecture?', options: ['Higher data rate', 'Lower power consumption', 'Longer range', 'Higher power consumption'], correct: 1, explanation: 'Zigbee has very low power consumption, making it suitable for battery-powered IoT devices.' },
                    { question: 'Which technology is best suited for personal devices according to the comparison table?', options: ['Zigbee', 'Wi-Fi', 'Bluetooth', 'WiMAX'], correct: 2, explanation: 'Bluetooth is designed primarily for personal devices and short-range communication.' },
                    { question: 'Which of the following is a suitable application of LR-WPAN?', options: ['Smart homes', 'Healthcare monitoring', 'Industrial automation', 'All of the above'], correct: 3, explanation: 'LR-WPAN is suitable for smart homes, healthcare monitoring, environmental monitoring, industrial automation, and smart farming.' },
                    { question: 'Which mobile communication technology provides data rates of up to 100 Mb/s according to the lecture?', options: ['2G', '3G', '4G', 'Bluetooth'], correct: 2, explanation: 'The lecture states that mobile communication data rates range from 9.6 Kb/s for 2G to up to 100 Mb/s for 4G.' },
                    { question: 'What is the main responsibility of the Network/Internet Layer?', options: ['Performing data visualization.', 'Sending IP datagrams from source to destination networks.', 'Managing user interfaces.', 'Providing application services.'], correct: 1, explanation: 'The Network Layer handles IP datagram delivery, host addressing, and packet routing.' },
                    { question: 'How many bits are used in an IPv4 address?', options: ['16 bits', '32 bits', '64 bits', '128 bits'], correct: 1, explanation: 'IPv4 uses a 32-bit hierarchical addressing scheme to identify devices on a network.' },
                    { question: 'How many bits are used in an IPv6 address?', options: ['32 bits', '64 bits', '128 bits', '256 bits'], correct: 2, explanation: 'IPv6 uses 128-bit addresses, providing a much larger address space than IPv4.' },
                    { question: 'What does 6LoWPAN stand for?', options: ['IPv6 over Low Power Wireless Personal Area Network', 'IPv4 over Local Wireless Personal Area Network', 'Internet Protocol over Long Wireless Network', 'IPv6 over Long Wide Area Network'], correct: 0, explanation: '6LoWPAN enables IPv6 communication over Low-Power Wireless Personal Area Networks.' },
                    { question: '6LoWPAN is mainly used for devices with:', options: ['Unlimited processing capacity', 'Limited processing capacity', 'High-performance GPUs', 'Large storage systems'], correct: 1, explanation: '6LoWPAN is designed to support constrained devices with limited processing resources.' },
                    { question: 'Which of the following is NOT a function of the Transport Layer?', options: ['Error control', 'Segmentation', 'Flow control', 'Image processing'], correct: 3, explanation: 'The Transport Layer provides end-to-end message transfer and functions such as error control, segmentation, flow control, and congestion control.' },
                    { question: 'Which protocol is connection-oriented and provides reliable transmission?', options: ['UDP', 'TCP', 'HTTP', 'CoAP'], correct: 1, explanation: 'TCP is connection-oriented and provides reliable transmission through error detection, retransmission, and flow and congestion control.' },
                    { question: 'Which protocol does NOT establish a connection before transmitting data?', options: ['TCP', 'HTTP', 'UDP', 'WebSocket'], correct: 2, explanation: 'UDP is connectionless. It sends data without establishing a connection first.' },
                    { question: 'Which protocol does not guarantee proper ordering of messages?', options: ['TCP', 'UDP', 'HTTP', 'IPv6'], correct: 1, explanation: 'UDP does not guarantee reliable delivery or proper message ordering.' },
                    { question: 'TCP Flow Control is used to:', options: ['Prevent the sender from transmitting data too quickly for the receiver.', 'Increase the size of IP addresses.', 'Assign unique identities to devices.', 'Encrypt all network traffic.'], correct: 0, explanation: 'Flow control ensures that the sender\'s data transmission rate is not too high for the receiver to handle.' },
                    { question: 'Which protocol forms the foundation of the World Wide Web (WWW)?', options: ['UDP', 'HTTP', 'TCP', 'Zigbee'], correct: 1, explanation: 'HTTP (Hypertext Transfer Protocol) forms the foundation of the World Wide Web.' },
                    { question: 'Which of the following is an HTTP method?', options: ['GET', 'POST', 'PUT', 'All of the above'], correct: 3, explanation: 'HTTP supports methods such as GET, PUT, POST, HEAD, OPTIONS, and TRACE.' },
                    { question: 'HTTP follows which communication model?', options: ['Publish–Subscribe', 'Push–Pull', 'Request–Response', 'Exclusive Pair'], correct: 2, explanation: 'HTTP uses a request–response model in which a client sends a request and a server returns a response.' },
                    { question: 'Which protocol is specifically designed for Machine-to-Machine (M2M) applications involving constrained devices?', options: ['HTTP', 'CoAP', 'Ethernet', 'WiMAX'], correct: 1, explanation: 'CoAP (Constrained Application Protocol) is designed for M2M communication and constrained IoT devices.' },
                    { question: 'Which of the following methods is supported by CoAP?', options: ['GET, POST, PUT, DELETE', 'START, STOP, RUN', 'SEND, RECEIVE, CONNECT', 'OPEN, CLOSE, EXECUTE'], correct: 0, explanation: 'CoAP supports GET, POST, PUT, and DELETE, similar to common HTTP methods.' },
                    { question: 'Which protocol allows full-duplex communication over a single socket?', options: ['HTTP', 'CoAP', 'WebSocket', 'IPv4'], correct: 2, explanation: 'WebSocket supports full-duplex communication, allowing both client and server to send data independently over one connection.' },
                    { question: 'WebSocket is based on which transport protocol?', options: ['UDP', 'TCP', 'IPv6', 'Ethernet'], correct: 1, explanation: 'WebSocket is based on TCP and maintains a single connection for bidirectional communication.' },
                    { question: 'Which of the following is a list of IoT Application Layer protocols mentioned in the lecture?', options: ['HTTP, CoAP, WebSocket, MQTT', 'IPv4, IPv6, TCP, UDP', 'Ethernet, Wi-Fi, WiMAX, Bluetooth', 'RAM, ROM, CPU, GPU'], correct: 0, explanation: 'The lecture lists HTTP, CoAP, WebSocket, MQTT, XMPP, DDS, and AMQP as Application Layer protocols.' },
                    { question: 'Which of the following is a component of the Logical Design of IoT?', options: ['Device', 'Communication', 'Management', 'All of the above'], correct: 3, explanation: 'Logical Design includes Device, Communication, Services, Management, Security, and Applications.' },
                    { question: 'Which of the following is considered an IoT Security function?', options: ['Authentication', 'Authorization', 'Message and content integrity', 'All of the above'], correct: 3, explanation: 'IoT security includes authentication, authorization, message and content integrity, and data security.' },
                    { question: 'In the Request–Response communication model, who initiates the communication?', options: ['The server', 'The client', 'The broker', 'The database'], correct: 1, explanation: 'The client sends a request to the server, and the server processes it and sends back a response.' },
                    { question: 'Which communication model is described as stateless in the lecture?', options: ['Request–Response', 'Exclusive Pair', 'Push–Pull', 'Publish–Subscribe'], correct: 0, explanation: 'The Request–Response model is described as stateless because each request is handled independently.' },
                    { question: 'Which components are involved in the Publish–Subscribe communication model?', options: ['Client and server only', 'Publisher, broker, and consumer', 'Router and coordinator only', 'Sensor and actuator only'], correct: 1, explanation: 'Publish–Subscribe involves three main components: publishers, brokers, and consumers.' },
                    { question: 'In the Publish–Subscribe model, what is the role of the broker?', options: ['Generate sensor data.', 'Manage topics and forward published data to subscribed consumers.', 'Replace all network protocols.', 'Store only application code.'], correct: 1, explanation: 'The broker manages topics and distributes incoming published data to all consumers subscribed to those topics.' },
                    { question: 'In Publish–Subscribe communication, publishers:', options: ['Must know all consumers.', 'Communicate directly with every consumer.', 'Are not aware of the consumers.', 'Cannot send data to topics.'], correct: 2, explanation: 'Publishers send data to topics managed by the broker without knowing who the subscribers are.' },
                    { question: 'Which statement correctly compares Request–Response and Publish–Subscribe?', options: ['Both always use direct communication.', 'Request–Response is one-to-one, while Publish–Subscribe is one-to-many.', 'Publish–Subscribe requires the client to request every update.', 'Request–Response is always asynchronous.'], correct: 1, explanation: 'Request–Response typically involves direct one-to-one communication, whereas Publish–Subscribe uses a broker to distribute information to multiple subscribers asynchronously.' },
                    { question: 'In MQTT, which of the following information may be remembered by the broker?', options: ['Subscriptions', 'Client sessions', 'Retained messages', 'All of the above'], correct: 3, explanation: 'The lecture explains that MQTT brokers may remember subscriptions, client sessions, Last Will messages, and retained messages. This makes MQTT partially stateful at the broker level.' },
                    { question: 'REST stands for:', options: ['Remote Execution State Transfer', 'Representational State Transfer', 'Reliable Electronic System Transmission', 'Resource Exchange Standard Technology'], correct: 1, explanation: 'REST is an architectural style based on principles for designing web services and APIs around resources and their states.' },
                    { question: 'REST APIs follow which communication model?', options: ['Exclusive Pair', 'Publish–Subscribe', 'Request–Response', 'Push–Pull'], correct: 2, explanation: 'REST APIs use the Request–Response communication model, commonly using standard HTTP methods.' },
                    { question: 'Which communication model is followed by WebSocket-based APIs?', options: ['Request–Response', 'Exclusive Pair', 'Publish–Subscribe', 'Push–Pull'], correct: 1, explanation: 'WebSocket APIs follow the Exclusive Pair model and allow continuous bidirectional communication.' },
                    { question: 'Which statement about REST and WebSocket is correct according to the lecture?', options: ['REST is stateful, while WebSocket is stateless.', 'REST is bidirectional, while WebSocket is unidirectional.', 'REST is stateless, while WebSocket is stateful.', 'Both use multiple TCP connections for every request.'], correct: 2, explanation: 'The comparison table describes REST as stateless and WebSocket as stateful.' },
                    { question: 'Which technology provides distributed devices with sensors to monitor environmental and physical conditions?', options: ['Cloud Computing', 'Wireless Sensor Network', 'Big Data Analytics', 'REST API'], correct: 1, explanation: 'A Wireless Sensor Network (WSN) consists of distributed sensor-equipped devices used to monitor physical and environmental conditions.' },
                    { question: 'In a Wireless Sensor Network, which node collects data from other nodes and acts as a gateway to the Internet?', options: ['Router', 'Coordinator', 'Consumer', 'Publisher'], correct: 1, explanation: 'The coordinator collects data from all nodes and acts as a gateway connecting the WSN to the Internet. Routers forward packets from end nodes to coordinators.' },
                    { question: 'Which of the following is an example of a Wireless Sensor Network application?', options: ['Weather monitoring', 'Soil moisture monitoring', 'Health monitoring', 'All of the above'], correct: 3, explanation: 'WSN applications include weather monitoring, indoor air quality monitoring, soil moisture monitoring, surveillance, and health monitoring.' },
                    { question: 'Cloud Computing provides which of the following resources on demand?', options: ['Computing resources', 'Networking resources', 'Storage resources', 'All of the above'], correct: 3, explanation: 'Cloud Computing delivers computing, networking, and storage resources over the Internet on demand.' },
                    { question: 'Which Cloud Computing service model allows users to rent infrastructure?', options: ['SaaS', 'PaaS', 'IaaS', 'WSN'], correct: 2, explanation: 'IaaS (Infrastructure as a Service) allows users to rent infrastructure resources.' },
                    { question: 'Which Cloud Computing model provides an environment for developing, testing, delivering, and managing software applications?', options: ['IaaS', 'PaaS', 'SaaS', 'TCP'], correct: 1, explanation: 'PaaS (Platform as a Service) provides an on-demand platform and environment for the software development lifecycle.' },
                    { question: 'Which Cloud Computing model delivers software applications over the Internet, typically through a subscription?', options: ['IaaS', 'PaaS', 'SaaS', 'IPv6'], correct: 2, explanation: 'SaaS (Software as a Service) delivers software applications over the Internet, usually on demand and through a subscription.' },
                    { question: 'Big Data refers to datasets whose volume, velocity, or variety makes them difficult to:', options: ['Display on a screen only.', 'Store, manage, process, and analyze using traditional databases.', 'Send through Bluetooth only.', 'Convert into IP addresses.'], correct: 1, explanation: 'Big Data involves datasets that are too large or complex for traditional database systems to efficiently store, manage, process, and analyze.' },
                    { question: 'Which of the following correctly represents the three main Big Data characteristics discussed in the lecture?', options: ['Volume, Velocity, Variety', 'Value, Version, Visibility', 'Virtualization, Validation, Volume', 'Variety, Verification, Visibility'], correct: 0, explanation: 'The three characteristics are Volume, Velocity, and Variety. Volume is the amount of data, Velocity is the speed of processing, and Variety covers structured, unstructured, and semi-structured data.' },
                    { question: 'Which of the following is a component of an IoT system according to the deployment template?', options: ['Device', 'Resource', 'Controller Service', 'All of the above'], correct: 3, explanation: 'IoT system components include devices, resources, controller services, databases, web services, analysis components, and applications.' },
                    { question: 'What is the role of Resources in an IoT system?', options: ['Only displaying information to users.', 'Accessing, processing, and storing sensor information and controlling actuators.', 'Replacing the Internet connection.', 'Performing authentication only.'], correct: 1, explanation: 'Resources are software components on IoT devices that access, process, and store sensor information or control connected actuators.' },
                    { question: 'What is the primary function of the Controller Service?', options: ['It only stores data in a local database.', 'It sends device data to web services and receives commands from applications.', 'It only performs data visualization.', 'It replaces the coordinator in every WSN.'], correct: 1, explanation: 'The Controller Service runs on the device, interacts with web services, sends device data, and receives control commands from applications.' },
                    { question: 'What is the function of the Analysis Component?', options: ['Connecting sensors physically.', 'Analyzing IoT data and generating understandable results.', 'Assigning IP addresses only.', 'Replacing the application interface.'], correct: 1, explanation: 'The Analysis Component processes IoT data and generates results in a form that users can understand.' },
                    { question: 'Which IoT level has a single node that performs sensing, actuation, data storage, analysis, and hosts the application?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'], correct: 0, explanation: 'Level 1 is the simplest IoT deployment. A single device performs the main operations locally, including hosting the application.' },
                    { question: 'Level 1 IoT systems are most suitable for:', options: ['High-complexity solutions with massive computational requirements.', 'Low-cost and low-complexity solutions with small data and simple analysis.', 'Systems requiring multiple coordinators.', 'Systems requiring centralized cloud analytics.'], correct: 1, explanation: 'Level 1 is suitable when the data volume is small and the analysis requirements are not computationally intensive.' },
                    { question: 'Which IoT level performs local analysis but stores data in the cloud and usually uses a cloud-based application?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 5'], correct: 1, explanation: 'Level 2 uses a single node for sensing and local analysis, while data storage and the application are cloud-based.' },
                    { question: 'Which IoT level performs both data storage and analysis in the cloud?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'], correct: 2, explanation: 'Level 3 has a single node, while data is stored and analyzed in the cloud. The application is also cloud-based.' },
                    { question: 'Which IoT level uses multiple nodes that perform local analysis, with cloud-based data storage and applications?', options: ['Level 2', 'Level 3', 'Level 4', 'Level 6'], correct: 2, explanation: 'Level 4 introduces multiple nodes, each capable of local analysis, with cloud-based storage and applications.' },
                    { question: 'Which IoT level contains multiple end nodes and one coordinator node?', options: ['Level 1', 'Level 3', 'Level 4', 'Level 5'], correct: 3, explanation: 'Level 5 uses multiple end nodes for sensing and/or actuation. A coordinator collects their data and sends it to the cloud.' },
                    { question: 'Which IoT level is particularly suitable for Wireless Sensor Network-based solutions with computationally intensive analysis?', options: ['Level 1', 'Level 2', 'Level 5', 'Level 1 and Level 2 only'], correct: 2, explanation: 'Level 5 is designed for WSN-based solutions with large amounts of data and computationally intensive cloud analysis.' },
                    { question: 'Which IoT level has multiple independent end nodes that send data to the cloud, with a centralized controller managing all nodes?', options: ['Level 2', 'Level 3', 'Level 5', 'Level 6'], correct: 3, explanation: 'Level 6 contains multiple independent end nodes. A centralized controller knows the status of all nodes and sends them control commands.' },
                    { question: 'A smart home system uses one device to collect sensor data, analyze it locally, and store everything on the same device. Which IoT level does it represent?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 5'], correct: 0, explanation: 'Level 1 performs sensing, storage, analysis, and application hosting on a single device.' },
                    { question: 'A smart irrigation system collects soil moisture data and analyzes it locally, but stores the data in the cloud. Which level is this?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 6'], correct: 1, explanation: 'This matches the lecture\'s Smart Irrigation example for Level 2.' },
                    { question: 'A package tracking system uses accelerometers and gyroscopes, with data analyzed in the cloud. Which IoT level is used?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'], correct: 2, explanation: 'Package Handling Tracking is the example provided for Level 3.' },
                    { question: 'A noise monitoring system uses multiple nodes with sound sensors. Each node performs local analysis, and data is stored in the cloud. Which level does this describe?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'], correct: 3, explanation: 'Multiple nodes performing local analysis with cloud storage and cloud applications describe Level 4. The lecture associates noise monitoring with this level.' },
                    { question: 'A system contains several sensor nodes that send their data to one coordinator, which forwards the information to the cloud. Which level is this?', options: ['Level 2', 'Level 3', 'Level 5', 'Level 6'], correct: 2, explanation: 'Level 5 specifically uses multiple end nodes and one coordinator node.' },
                    { question: 'A centralized controller monitors multiple independent nodes and sends control commands to them. Which level is this?', options: ['Level 1', 'Level 3', 'Level 5', 'Level 6'], correct: 3, explanation: 'The centralized controller is a key distinguishing feature of Level 6.' },
                    { question: 'An IoT application needs continuous bidirectional communication between a client and a server using one TCP connection. Which technology is most appropriate?', options: ['REST', 'WebSocket', 'UDP', 'IPv4'], correct: 1, explanation: 'WebSocket provides full-duplex communication over a single TCP connection.' },
                    { question: 'A temperature sensor publishes its readings to a topic, and several applications receive the readings through a broker. Which communication model is being used?', options: ['Request–Response', 'Publish–Subscribe', 'Exclusive Pair', 'REST'], correct: 1, explanation: 'The publisher sends information to a topic, and the broker forwards it to all subscribed consumers. This is the Publish–Subscribe model.' },
                    { question: 'A client sends a GET request to a server and waits for a response containing requested data. Which model is being used?', options: ['Publish–Subscribe', 'Request–Response', 'Push–Pull', 'Exclusive Pair'], correct: 1, explanation: 'GET is an HTTP method, and HTTP follows the Request–Response model.' },
                    { question: 'A system needs to communicate with devices that have limited processing power and resources. Which application protocol is designed for this purpose?', options: ['HTTP', 'CoAP', 'Ethernet', 'WiMAX'], correct: 1, explanation: 'CoAP is specifically designed for constrained devices and M2M applications.' },
                    { question: 'An IoT device needs reliable transmission, error detection, and retransmission of lost packets. Which protocol should it use?', options: ['UDP', 'TCP', 'Zigbee', 'Bluetooth'], correct: 1, explanation: 'TCP provides reliable transmission using error detection and retransmission mechanisms.' },
                    { question: 'A device sends data without establishing a connection and does not require guaranteed message ordering. Which protocol is suitable?', options: ['TCP', 'HTTP', 'UDP', 'WebSocket'], correct: 2, explanation: 'UDP is connectionless and does not guarantee message ordering or reliable delivery.' }
                ]
            },
            {
                id: 'iot-quiz2',
                title: 'Lec-2 MCQs for midterm',
                questions: [
                    { question: 'What is the block structure of the basic analog communication system in the notes?', options: ['Data → Source coding → Transmitter → Channel → Decoder', 'Sender → Channel → Receiver', 'Receiver → Channel → Sender → Decoder', 'Transmitter → Source coding → Receiver'], correct: 1, explanation: 'The basic analog communication system consists of Sender → Channel → Receiver. Source coding and Decoder are part of the digital system.' },
                    { question: 'Why is the land-phone (wired) approach described as a weakness?', options: ['It is unscalable and not efficient', 'It cannot carry voice', 'It uses too little bandwidth', 'It only works with digital data'], correct: 0, explanation: 'Wired connections are unscalable and inefficient because adding more users requires adding more physical wiring.' },
                    { question: 'Which block comes right after Source coding in the digital communication system?', options: ['Data', 'Channel', 'Decoder', 'Transmitter'], correct: 3, explanation: 'The digital communication flow is Data → Source coding → Transmitter → Channel → Decoder → Receiver.' },
                    { question: 'Which statement correctly describes lossless vs lossy source coding?', options: ['Lossless discards information; lossy recovers the original exactly', 'Both always discard information', 'Lossless recovers the original data exactly; lossy discards some information', 'Lossy is used only for text'], correct: 2, explanation: 'Lossless compression preserves all information, while lossy compression discards some information to save space.' },
                    { question: 'Which of these is NOT one of the three ways the notes classify signals?', options: ['Continuous / Discrete', 'Odd / Even', 'Periodic / Aperiodic', 'Wired / Wireless'], correct: 3, explanation: 'Signals are classified as continuous/discrete, odd/even, and periodic/aperiodic. Wired/wireless describes the channel, not the signal.' },
                    { question: 'A discrete-time signal x[n] is defined:', options: ['At every real value of time', 'Only at integer values of n', 'Only at t = 0', 'Only for negative n'], correct: 1, explanation: 'A discrete-time signal is defined only at integer values of n, while a continuous signal is defined at every real value of time.' },
                    { question: 'Which condition defines an even signal?', options: ['x(t) = −x(−t)', 'x(t) = x(t + T)', 'x(t) = x(−t)', 'x(t) = 0'], correct: 2, explanation: 'An even signal satisfies x(t) = x(−t) for all t. x(t) = −x(−t) defines an odd signal, and x(t) = x(t + T) defines a periodic signal.' },
                    { question: 'Which of the following is an odd signal?', options: ['cos(t)', 'sin(t)', 'A constant signal x(t) = 5', 'cos(2t)'], correct: 1, explanation: 'sin(t) is odd because sin(−t) = −sin(t). cos(t) and constant signals are even.' },
                    { question: 'For a discrete signal, the odd-signal condition is:', options: ['x[n] = x[−n]', 'x[n] = −x[−n]', 'x[n] = x[n + N]', 'x[n] = 1/N'], correct: 1, explanation: 'For a discrete signal, odd means x[n] = −x[−n] for all n. The even condition is x[n] = x[−n].' },
                    { question: 'A periodic signal is one whose pattern:', options: ['Occurs only once', 'Decays to zero', 'Repeats to infinity', 'Changes randomly'], correct: 2, explanation: 'A periodic signal repeats the same pattern indefinitely.' },
                    { question: 'What is the mathematical condition for a periodic continuous signal?', options: ['x(t) = x(t + T) for all t, for some T', 'x(t) = x(−t) for all t', 'x(t) = −x(t + T)', 'x(t) = T / t'], correct: 0, explanation: 'A continuous periodic signal satisfies x(t) = x(t + T) for all t for some period T.' },
                    { question: 'The fundamental period of a periodic signal is:', options: ['The largest T that satisfies x(t) = x(t + T)', 'The smallest T that satisfies x(t) = x(t + T)', 'Always equal to 1 second', 'The amplitude of the signal'], correct: 1, explanation: 'The fundamental period is the smallest positive T that satisfies the periodic condition.' },
                    { question: 'A periodic signal has a fundamental period T = 0.002 s. What is its fundamental frequency?', options: ['5 Hz', '50 Hz', '500 Hz', '0.002 Hz'], correct: 2, explanation: 'f = 1/T = 1/0.002 = 500 Hz.' },
                    { question: 'For a continuous periodic signal with period T = 0.5 s, the angular frequency ω = 2π/T equals:', options: ['π rad/s', '2π rad/s', '4π rad/s', '0.5π rad/s'], correct: 2, explanation: 'ω = 2π/T = 2π/0.5 = 4π rad/s.' },
                    { question: 'What is the difference between ω and Ω in the notes?', options: ['ω = 2π/T is for continuous signals (change by time); Ω = 2π/N is for discrete signals (change by value)', 'ω is for discrete signals and Ω is for continuous signals', 'They are identical in every case', 'ω = 1/T and Ω = 1/N'], correct: 0, explanation: 'ω is used for continuous-time periodic signals, while Ω is used for discrete-time periodic signals.' }
                ]
            },
            {
                id: 'iot-quiz3',
                title: 'Lec-3 MCQs midterm',
                questions: [
                    { question: 'What is modulation?', options: ['Removing noise from a signal', 'Changing one or more properties of a high-frequency carrier according to the message signal', 'Converting a digital signal to analog using a filter only', 'Amplifying the message signal without a carrier'], correct: 1, explanation: 'Modulation changes one or more properties of a carrier according to the message signal.' },
                    { question: 'Which of the following is NOT a purpose of modulation?', options: ['Transmit low-frequency signals over long distances efficiently', 'Allow multiple signals to share the same medium', 'Increase the antenna size', 'Improve signal quality and reduce interference and noise'], correct: 2, explanation: 'Modulation typically allows smaller antennas because higher carrier frequencies are used; it does not increase antenna size.' },
                    { question: 'Why does modulation allow multiple signals to share the same medium?', options: ['Each signal is sent at a different time only', 'Through frequency division: each signal uses a different carrier frequency', 'Because the signals are compressed', 'Because the medium has no limits'], correct: 1, explanation: 'Frequency division assigns different carrier frequencies to different signals so they can share the same medium.' },
                    { question: 'In AM radio, which property of the carrier is changed by the message?', options: ['Frequency', 'Phase', 'Amplitude', 'Wavelength only'], correct: 2, explanation: 'AM stands for Amplitude Modulation; the message changes the carrier amplitude.' },
                    { question: 'In FM radio, the audio signal changes the carrier’s:', options: ['Amplitude', 'Frequency', 'Phase only', 'Power only'], correct: 1, explanation: 'FM stands for Frequency Modulation; the message changes the carrier frequency.' },
                    { question: 'Phase Modulation (PM) varies which property of the carrier?', options: ['Amplitude', 'Frequency', 'Phase', 'Bandwidth'], correct: 2, explanation: 'Phase Modulation changes the phase of the carrier according to the message.' },
                    { question: 'Which of the following is a digital modulation technique?', options: ['AM', 'FM', 'PM', 'PSK'], correct: 3, explanation: 'AM, FM, and PM are analog modulation techniques. ASK, FSK, PSK, and QAM are digital.' },
                    { question: 'ASK, FSK and PSK change which carrier property, respectively?', options: ['Amplitude, Frequency, Phase', 'Phase, Amplitude, Frequency', 'Frequency, Phase, Amplitude', 'Amplitude, Phase, Frequency'], correct: 0, explanation: 'ASK changes amplitude, FSK changes frequency, and PSK changes phase.' },
                    { question: 'QAM (Quadrature Amplitude Modulation) combines changes in:', options: ['Frequency and phase', 'Amplitude and frequency', 'Amplitude and phase', 'Phase only'], correct: 2, explanation: 'QAM combines changes in both amplitude and phase.' },
                    { question: 'What is demodulation?', options: ['Adding a carrier to the message', 'The reverse of modulation: extracting the original message from the modulated carrier at the receiver', 'Increasing the carrier frequency', 'Encrypting the message'], correct: 1, explanation: 'Demodulation extracts the original message from the modulated carrier at the receiver.' },
                    { question: 'What does the demodulator in an FM receiver detect?', options: ['Changes in the amplitude of the received signal', 'Changes in the frequency of the received signal', 'Changes in the antenna size', 'The number of users'], correct: 1, explanation: 'An FM demodulator detects changes in the received signal frequency to recover the message.' },
                    { question: 'What is a wireless channel?', options: ['A physical copper conductor between transmitter and receiver', 'The medium (such as air or vacuum) through which radio waves propagate between transmitter and receiver', 'A type of antenna', 'A modulation scheme'], correct: 1, explanation: 'A wireless channel is the medium, such as air or vacuum, through which radio waves propagate.' },
                    { question: 'Why are wireless channels more unpredictable than wired channels?', options: ['They rely on open space and are more affected by environmental conditions', 'They use thicker cables', 'They always have line of sight', 'They do not use electromagnetic waves'], correct: 0, explanation: 'Wireless channels depend on open space and are strongly affected by environmental conditions.' },
                    { question: 'Which problem occurs when buildings or vehicles obstruct the line-of-sight path?', options: ['Interference', 'Refraction', 'Blockage', 'Demodulation'], correct: 2, explanation: 'Blockage occurs when physical objects obstruct the line-of-sight path and cause signal loss.' },
                    { question: 'Why are mmWave signals especially vulnerable to blockage?', options: ['Their wavelengths are very long', 'Their short wavelengths mean even small obstacles can block them', 'They use low frequencies', 'They are digital only'], correct: 1, explanation: 'mmWave signals have short wavelengths, so even small obstacles can block them.' },
                    { question: 'Interference from other transmitters using the same frequency is called:', options: ['Adjacent channel interference', 'Co-channel interference', 'Refraction', 'Shadow fading'], correct: 1, explanation: 'Co-channel interference comes from transmitters using the same frequency.' },
                    { question: 'Interference mainly causes which effect?', options: ['Increases SNR and lowers BER', 'Reduces SNR and increases BER', 'Increases antenna gain', 'Reduces the wavelength'], correct: 1, explanation: 'Interference reduces SNR and increases BER, reducing communication quality.' },
                    { question: 'The bending of radio waves as they pass through media of different density is called:', options: ['Blockage', 'Interference', 'Refraction', 'Modulation'], correct: 2, explanation: 'Refraction is the bending of radio waves when they pass through media of different density.' },
                    { question: 'Which statement about slow fading (shadow fading) is correct?', options: ['It is caused by multipath and occurs over milliseconds', 'It is caused by large obstacles, occurs over long distances or times, and is modeled by a log-normal distribution', 'It is modeled by Rayleigh distribution', 'It only affects phase'], correct: 1, explanation: 'Slow fading is caused by large obstacles over long distances or times and is modeled with a log-normal distribution.' },
                    { question: 'Which statement about fast fading is correct?', options: ['It is caused by multipath, occurs over a few wavelengths or milliseconds, and is modeled by Rayleigh or Rician distributions', 'It is caused by large hills only', 'It is modeled by log-normal distribution', 'It changes very slowly'], correct: 0, explanation: 'Fast fading is caused by multipath over short distances or times and is modeled by Rayleigh or Rician distributions.' },
                    { question: 'A mobile user walks behind a large building and the signal strength drops gradually. This is:', options: ['Fast fading', 'Co-channel interference', 'Slow fading', 'Demodulation'], correct: 2, explanation: 'A gradual signal drop caused by a large obstacle is slow fading or shadow fading.' },
                    { question: 'A person walks down a street and the signal fluctuates rapidly due to reflections from buildings and moving cars. This is:', options: ['Slow fading', 'Fast fading', 'Blockage only', 'Refraction only'], correct: 1, explanation: 'Rapid fluctuations caused by multiple reflections are fast fading.' },
                    { question: 'Which techniques are used to mitigate fast fading?', options: ['Power control and cell planning', 'Diversity, equalization and adaptive modulation', 'Increasing the carrier amplitude only', 'Using longer cables'], correct: 1, explanation: 'Fast fading is mitigated using diversity, equalization, and adaptive modulation.' },
                    { question: 'Which technique is used to mitigate slow fading?', options: ['Diversity schemes', 'Equalization', 'Power control and cell planning', 'Adaptive modulation only'], correct: 2, explanation: 'Slow fading is mitigated using power control and cell planning.' }
                ]
            },
            {
                id: 'iot-quiz4',
                title: 'Lec-4 MCQs midterm',
                questions: [
                    { question: 'What does the receiver need to study about the channel in order to compensate for fading?', options: ['The color of the antenna', 'The characteristics of the channel', 'The size of the transmitter', 'Nothing, compensation is not possible'], correct: 1, explanation: 'The receiver studies the channel characteristics to compensate for fading.' },
                    { question: 'An omni-directional antenna radiates:', options: ['Only in one direction', 'Equally in all directions', 'Only upward', 'Only toward the receiver'], correct: 1, explanation: 'An omni-directional antenna radiates equally in all directions.' },
                    { question: 'In a directional antenna, the beam pattern represents:', options: ['The antenna’s weight', 'The gain', 'The wavelength', 'The noise'], correct: 1, explanation: 'The beam pattern represents the antenna gain in different directions.' },
                    { question: 'Why must the antennas’ orientation be considered in a directional link?', options: ['Because gain depends on direction, so misaligned beams reduce the received power', 'Because antennas only work vertically', 'Because orientation changes the carrier frequency', 'It does not matter'], correct: 0, explanation: 'Directional antenna gain depends on direction, so misaligned beams reduce received power.' },
                    { question: 'Which of the following is NOT one of the three effects on a wireless signal listed in the notes?', options: ['Absorption', 'Refraction', 'Blockage', 'Modulation'], correct: 3, explanation: 'The three wireless channel effects are absorption, refraction, and blockage. Modulation is a signal process, not a channel effect.' },
                    { question: 'An absorbing medium causes:', options: ['A stronger signal at the receiver', 'Part of the signal energy to be absorbed, so the received signal is weaker', 'No change in signal', 'A change in the carrier frequency'], correct: 1, explanation: 'An absorbing medium absorbs part of the signal energy, weakening the received signal.' },
                    { question: 'According to the notes, what is the source of noise?', options: ['Large buildings', 'Hardware components', 'The sky', 'The wavelength'], correct: 1, explanation: 'Noise comes from hardware components in the communication system.' },
                    { question: 'Which type of loss is deterministic?', options: ['Shadowing', 'Small-scale fading', 'Path loss', 'Blockage'], correct: 2, explanation: 'Path loss is deterministic because it can be calculated from distance and other known parameters.' },
                    { question: 'Shadowing is described as:', options: ['Deterministic and small-scale', 'Random, large-scale, over long time periods', 'Random, small-scale, over microseconds', 'Deterministic and caused by hardware'], correct: 1, explanation: 'Shadowing is random, large-scale fading that occurs over long distances or time periods.' },
                    { question: 'Small-scale fading is caused by:', options: ['Loss due to distance', 'Constructive and destructive interference of multiple signal copies', 'Large hills only', 'Antenna gain'], correct: 1, explanation: 'Small-scale fading is caused by constructive and destructive interference from multiple signal copies.' },
                    { question: 'Which fading is frequency dependent according to the notes?', options: ['Large-scale fading', 'Path loss', 'Small-scale fading', 'None of them'], correct: 2, explanation: 'Small-scale fading is frequency dependent, while large-scale fading is frequency independent.' },
                    { question: 'The free-space model assumes:', options: ['Strong fading and many obstacles', 'No fading and the far-field assumption', 'Only wired transmission', 'A square-wave transmitted signal'], correct: 1, explanation: 'The free-space model assumes no fading and uses the far-field assumption with sinusoidal signals.' },
                    { question: 'In the free-space model, what does the received electric field depend on?', options: ['Only the transmitter’s color', 'Radiation patterns, distance, a time-varying term and a phase shift', 'Only the noise', 'Only the receiver’s weight'], correct: 1, explanation: 'The received electric field depends on radiation patterns, distance, a time-varying term, and a phase shift.' },
                    { question: 'For an omni-directional antenna, the radiation pattern α is:', options: ['Zero', 'Constant', 'Infinite', 'Random'], correct: 1, explanation: 'An omni-directional antenna radiates equally in all directions, so its radiation pattern is constant.' },
                    { question: 'In Friis’ equation P_R = P_T·G_T·G_R·(λ/4πr)², what does r represent?', options: ['Wavelength', 'Antenna gain', 'Distance between transmitter and receiver', 'Received power'], correct: 2, explanation: 'In Friis’ equation, r is the distance between the transmitter and receiver.' },
                    { question: 'If the distance r increases, the received power P_R:', options: ['Increases', 'Stays the same', 'Decreases', 'Becomes infinite'], correct: 2, explanation: 'Received power is inversely proportional to r², so it decreases as distance increases.' },
                    { question: 'The power surface density at distance r from a transmitter of power P_T is:', options: ['P_T / (4πr²)', 'P_T · r', 'P_T · 4πr²', 'P_T / r'], correct: 0, explanation: 'Power spreads over a sphere of area 4πr², so density is P_T / (4πr²).' },
                    { question: 'In the path loss formula in dB, how does the loss change when the wavelength λ increases (all else equal)?', options: ['It increases', 'It decreases', 'It stays the same', 'It becomes zero'], correct: 1, explanation: 'Path loss includes −20 log λ, so increasing wavelength decreases path loss.' },
                    { question: 'Increasing the antenna gains G_T and G_R will:', options: ['Increase the path loss', 'Reduce the path loss', 'Not affect it', 'Change the carrier'], correct: 1, explanation: 'Higher antenna gains reduce path loss through the −10 log G_T and −10 log G_R terms.' },
                    { question: 'Calculate the free-space path loss for f = 2.4 GHz, r = 100 m, with unity gains (c = 3×10⁸ m/s).', options: ['About 40 dB', 'About 60 dB', 'About 80 dB', 'About 120 dB'], correct: 2, explanation: 'λ = c/f = 0.125 m, and L = 20 log(4π·100/0.125) ≈ 80 dB.' },
                    { question: 'In Q20, if the distance doubles to 200 m, the path loss becomes about:', options: ['74 dB', '80 dB', '86 dB', '160 dB'], correct: 2, explanation: 'Doubling distance adds 20 log 2 ≈ 6 dB, giving about 86 dB.' },
                    { question: 'In Q20, if both antennas have a gain of 10 dB, the path loss becomes about:', options: ['100 dB', '80 dB', '70 dB', '60 dB'], correct: 3, explanation: 'Each 10 dB antenna gain reduces path loss by 10 dB, so 80 − 10 − 10 = 60 dB.' },
                    { question: 'If the carrier frequency is halved (everything else equal), the path loss changes by about:', options: ['+6 dB', '−6 dB', '+3 dB', 'No change'], correct: 1, explanation: 'Halving frequency doubles wavelength, reducing path loss by about 20 log 2 ≈ 6 dB.' }
                ]
            }
        ]
    },
    {
        id: 'sp',
        name: 'Smartphone',
        code: 'SP405',
        icon: 'smartphone',
        description: 'Mobile application development',
        quizzes: [
            {
                id: 'sp-quiz2',
                title: 'Lecture 1 · Computer Architecture, Organization, and Design MCQs for midterm',
                questions: [
                    {
                        question: 'Which statement best summarizes Computer Architecture?',
                        options: ['What the computer does (what it provides to the programmer)', 'How the computer is internally arranged', 'How we engineer the actual implementation', 'How much the computer costs'],
                        correct: 0,
                        explanation: 'Computer Architecture is the abstract view of what the computer provides to the programmer: the instruction set, registers, and data types.'
                    },
                    {
                        question: 'Which of the following belongs to Computer Organization?',
                        options: ['Available instructions', 'Datapath and control unit', 'Addressing modes', 'Instruction formats'],
                        correct: 1,
                        explanation: 'Datapath and control unit describe how the computer is internally arranged and operates — that is Organization. Instructions, addressing modes, and instruction formats are architecture (ISA).'
                    },
                    {
                        question: 'The fact that MIPS provides an add instruction and specifies what it does is an example of:',
                        options: ['Organization', 'Design', 'Architecture', 'Implementation constraint'],
                        correct: 2,
                        explanation: 'Defining the add instruction and its behavior is part of the instruction set — the programmer-visible interface, which is Architecture.'
                    },
                    {
                        question: 'Which of the following is NOT an architectural characteristic of MIPS?',
                        options: ['32-bit instructions', '32 general-purpose registers', 'Load/store architecture', 'Number of pipeline stages in a specific implementation'],
                        correct: 3,
                        explanation: 'Pipeline stages depend on the specific implementation (organization/design), not the architecture. Instruction size, register count, and load/store style are ISA-level architectural characteristics.'
                    },
                    {
                        question: 'The question "How does the computer internally implement what the architecture specifies?" is answered by:',
                        options: ['Architecture', 'Organization', 'Design', 'Programming'],
                        correct: 1,
                        explanation: 'Organization describes how the hardware internally implements the architecture — the datapath, control unit, ALU, cache, and pipeline.'
                    },
                    {
                        question: 'Computer Design is:',
                        options: ['The set of instructions visible to the programmer', 'The engineering process of deciding how to build the system under specific requirements and constraints', 'Only the arrangement of buses', 'Only writing assembly programs'],
                        correct: 1,
                        explanation: 'Computer Design is the engineering process of deciding how to build the system given requirements and constraints such as power, cost, and performance.'
                    },
                    {
                        question: 'Which of the following is a design decision?',
                        options: ['Choosing the number of cores and clock frequency', 'Defining the addressing modes in the ISA', 'Defining the instruction formats', 'Defining the data types visible to the programmer'],
                        correct: 0,
                        explanation: 'Cores and clock frequency are implementation choices made during design under constraints. ISA addressing modes, instruction formats, and data types are architecture.'
                    },
                    {
                        question: 'A designer needs a processor with lower power consumption but high performance, so they choose 4 cores, a 3-level cache, a 5-stage pipeline, and a 2 GHz clock. These are all:',
                        options: ['Architectural characteristics', 'Design decisions', 'ISA features', 'Programmer-visible registers'],
                        correct: 1,
                        explanation: 'Choosing cores, cache levels, pipeline depth, and clock frequency to balance power and performance are engineering design decisions, not architecture.'
                    },
                    {
                        question: 'Which of the following are examples of design constraints mentioned in the lecture?',
                        options: ['Power consumption, area, cost', 'Registers visible to the programmer', 'Instruction formats', 'Addressing modes'],
                        correct: 0,
                        explanation: 'Power, area, and cost are physical/engineering constraints that drive design decisions. Registers, instruction formats, and addressing modes belong to the architecture.'
                    },
                    {
                        question: 'According to the diagram in the lecture, the relationship between the three concepts is:',
                        options: ['Design comes first, and Architecture and Organization are derived from it', 'Architecture (what it does) and Organization (how it works) come together at Design (how we build it under constraints)', 'Organization is at the top and splits into Architecture and Design', 'All three mean the same thing'],
                        correct: 1,
                        explanation: 'Architecture defines what the computer provides, Organization how it works internally, and Design how we build it under constraints — architecture and organization combine at the design level.'
                    },
                    {
                        question: 'Which term answers the question: "What does the computer provide to the programmer?"',
                        options: ['Computer Architecture', 'Computer Organization', 'Computer Design', 'Logic Design'],
                        correct: 0,
                        explanation: 'Architecture is the programmer-visible behavior: the ISA, instructions and registers (the "what").'
                    },
                    {
                        question: 'Which of the following is Organization rather than Architecture?',
                        options: ['Having 32 general-purpose registers', 'Having an add instruction in the ISA', 'The datapath and control unit', 'Instruction size of 32 bits'],
                        correct: 2,
                        explanation: 'Datapath, control, ALU, cache and pipeline describe how the hardware implements the architecture.'
                    },
                    {
                        question: 'Choosing 4 cores, a 5-stage pipeline and 2 GHz because of power and cost is:',
                        options: ['Architecture', 'Organization', 'A design decision', 'Compiler optimization'],
                        correct: 2,
                        explanation: 'Design is the engineering process of choosing how to build the system under constraints (power, cost, performance).'
                    },
                    {
                        question: 'Increasing the number of transistors causes which problems?',
                        options: ['Memory latency, power wall and heat', 'Only fewer registers', 'Smaller instruction size', 'No problems at all'],
                        correct: 0,
                        explanation: 'From the lecture notes: memory latency, communication overhead, the power wall and heat.'
                    },
                    {
                        question: 'In MIPS, what does lw mean?',
                        options: ['Load byte (8 bits)', 'Load half word (16 bits)', 'Load word (4 bytes = 32 bits)', 'Store word'],
                        correct: 2,
                        explanation: 'lw = load word = 4 bytes = 32 bits. lb is byte, lh is half word, and sw is store.'
                    },
                    {
                        question: 'What is the correct instruction order for C = A + B in MIPS?',
                        options: ['add → lw A → lw B → sw C', 'lw A → lw B → add → sw C', 'sw C → add → lw A → lw B', 'lw A → add → lw B → sw C'],
                        correct: 1,
                        explanation: 'Load A and B into registers, add them, then store the result in C.'
                    },
                    {
                        question: 'In lw $t0, 4($t1), what is the number 4 called and what happens to it?',
                        options: ['Opcode, shifted', 'Offset, sign-extended', 'Register number, decoded', 'Immediate, zero-filled only'],
                        correct: 1,
                        explanation: '4 is the offset; it is sign-extended to 32 bits before being added to the address in $t1.'
                    },
                    {
                        question: 'What is the memory hierarchy order from fastest to slowest?',
                        options: ['Register → Cache → RAM → SSD → HDD', 'Cache → Register → RAM → HDD → SSD', 'RAM → Cache → Register → SSD → HDD', 'Register → RAM → Cache → HDD → SSD'],
                        correct: 0,
                        explanation: 'Going down the hierarchy, speed decreases and capacity increases: Register, Cache, RAM, SSD, HDD, Cloud.'
                    }
                ]
            },
            {
                id: 'sp-quiz3',
                title: 'Lecture 2 · Instruction Set Architecture and Interrupts MCQs for midterm',
                questions: [
                    {
                        question: 'What is the main idea of the "software approach" compared to a hardwired program?',
                        options: ['Rewire the hardware for each new task', 'Supply a new set of control signals instead of rewiring', 'Use only ALU operations', 'Remove the control unit'],
                        correct: 1,
                        explanation: 'The software approach stores the program in memory; changing tasks means supplying new control signals, not rewiring hardware.'
                    },
                    {
                        question: 'The Control Unit and the ALU together constitute the:',
                        options: ['Main memory', 'I/O module', 'CPU', 'Bus'],
                        correct: 2,
                        explanation: 'The CPU consists of the control unit (CU) and the arithmetic-logic unit (ALU), plus registers.'
                    },
                    {
                        question: 'An instruction cycle consists of which two steps?',
                        options: ['Decode and store', 'Fetch and execute', 'Read and write', 'Interrupt and return'],
                        correct: 1,
                        explanation: 'Every instruction goes through a fetch cycle and an execute cycle.'
                    },
                    {
                        question: 'Which register holds the address of the next instruction to be fetched?',
                        options: ['IR', 'AC', 'PC', 'MBR'],
                        correct: 2,
                        explanation: 'The Program Counter (PC) holds the address of the next instruction to fetch.'
                    },
                    {
                        question: 'After an instruction is fetched, it is loaded into the:',
                        options: ['PC', 'IR', 'AC', 'MAR'],
                        correct: 1,
                        explanation: 'The fetched instruction is loaded into the Instruction Register (IR) for decoding and execution.'
                    },
                    {
                        question: 'Which of the following is NOT an action that may happen in an execute cycle?',
                        options: ['Processor–memory data transfer', 'Processor–I/O data transfer', 'Data processing', 'Incrementing the interrupt vector table'],
                        correct: 3,
                        explanation: 'Execute-cycle actions are processor–memory transfer, processor–I/O transfer, data processing, and control transfer. Incrementing the interrupt vector table is not one of them.'
                    },
                    {
                        question: 'In the hypothetical machine, the instruction is 16 bits: 4 bits opcode and 12 bits address. How many different opcodes and how many directly addressable words are possible?',
                        options: ['16 opcodes, 4096 words', '12 opcodes, 16 words', '4096 opcodes, 16 words', '8 opcodes, 1024 words'],
                        correct: 0,
                        explanation: '4 bits gives 2^4 = 16 opcodes; 12 bits gives 2^12 = 4096 addressable words.'
                    },
                    {
                        question: 'In the program example, the instruction `1940` (hex) with PC = 300 does what?',
                        options: ['Stores AC into location 940', 'Adds the content of location 940 to AC', 'Loads AC from location 940', 'Jumps to location 940'],
                        correct: 2,
                        explanation: 'Opcode 1 is Load: it loads the contents of memory location 940 into the accumulator AC.'
                    },
                    {
                        question: 'How many fetch and execute cycles are needed for the 3-instruction example program (Load, Add, Store)?',
                        options: ['1 fetch, 3 execute', '3 fetch, 1 execute', '3 fetch, 3 execute', '6 fetch, 6 execute'],
                        correct: 2,
                        explanation: 'Each of the 3 instructions needs one fetch cycle and one execute cycle: 3 fetches and 3 executes.'
                    },
                    {
                        question: 'A memory has 256K words of 32 bits each. How many bits are needed for the address part of the instruction?',
                        options: ['8', '16', '18', '32'],
                        correct: 2,
                        explanation: '256K = 256 × 1024 = 2^18 words, so the address field needs 18 bits.'
                    },
                    {
                        question: 'If an instruction must select one of 64 registers, the register field needs:',
                        options: ['4 bits', '6 bits', '8 bits', '64 bits'],
                        correct: 1,
                        explanation: '64 = 2^6, so 6 bits are needed to select among 64 registers.'
                    },
                    {
                        question: 'Which instruction cycle state determines the address of an operand located in memory or I/O?',
                        options: ['Instruction Fetch (IF)', 'Instruction Operation Decoding (IOD)', 'Operand Address Calculation (OAC)', 'Operand Store (OS)'],
                        correct: 2,
                        explanation: 'The Operand Address Calculation (OAC) state determines the effective address of a memory or I/O operand.'
                    },
                    {
                        question: 'Which instruction cycle states involve only internal processor operations?',
                        options: ['IF and OS', 'OAC and OF', 'IOD and DO', 'IF and OF'],
                        correct: 2,
                        explanation: 'Instruction Operation Decoding (IOD) and Data Operation (DO) involve only internal processor operations.'
                    },
                    {
                        question: 'A division by zero or an arithmetic overflow generates which class of interrupt?',
                        options: ['Timer', 'I/O', 'Hardware failure', 'Program'],
                        correct: 3,
                        explanation: 'Errors like division by zero or arithmetic overflow are program (trap) interrupts.'
                    },
                    {
                        question: 'Which interrupt class is used in pre-emptive multitasking (e.g., doing a data backup at regular intervals)?',
                        options: ['Program', 'Timer', 'I/O', 'Hardware failure'],
                        correct: 1,
                        explanation: 'Timer interrupts enable pre-emptive multitasking by interrupting the processor at regular intervals.'
                    },
                    {
                        question: 'When an interrupt is pending, the processor:',
                        options: ['Ignores it and fetches the next instruction', 'Saves the context and sets the PC to the start of the interrupt handler', 'Resets the whole system', 'Clears the IR and halts permanently'],
                        correct: 1,
                        explanation: 'On an interrupt, the processor saves the current context and jumps to the interrupt handler via the PC.'
                    },
                    {
                        question: 'When the interrupt handler finishes, the processor:',
                        options: ['Restarts the program from the beginning', 'Resumes the user program at the point of interruption', 'Skips the interrupted instruction', 'Waits for another interrupt'],
                        correct: 1,
                        explanation: 'The saved context is restored and the user program resumes at the point of interruption.'
                    },
                    {
                        question: 'In the "Disable interrupts" approach for multiple interrupts:',
                        options: ['Higher priority interrupts can interrupt lower ones', 'Further interrupts are ignored/pending until the current one is processed, then handled in sequence', 'Interrupts are handled randomly', 'Interrupts are permanently disabled'],
                        correct: 1,
                        explanation: 'With interrupts disabled, further interrupts pend until the current handler finishes, then they are serviced in sequence.'
                    },
                    {
                        question: 'What is the main disadvantage of the sequential (disable interrupts) approach?',
                        options: ['It is too complex', 'It does not take relative priority and time-critical needs into account', 'It needs extra hardware', 'It loses interrupts'],
                        correct: 1,
                        explanation: 'The sequential approach cannot prioritize interrupts, so time-critical ones may be delayed.'
                    },
                    {
                        question: 'Which approach allows a low-priority interrupt handler to be interrupted by a higher-priority one?',
                        options: ['Sequential', 'Nested (define priorities)', 'Polling', 'DMA'],
                        correct: 1,
                        explanation: 'The nested approach defines priorities so a higher-priority interrupt can interrupt a lower-priority handler.'
                    },
                    {
                        question: 'Why is an interrupt not needed when using DMA?',
                        options: ['DMA is slower than interrupts', 'The I/O device exchanges data with memory directly, bypassing the processor', 'DMA uses only registers', 'DMA disables the memory'],
                        correct: 1,
                        explanation: 'DMA lets the I/O device transfer data directly to/from memory without processor intervention, so no interrupts are needed per transfer.'
                    },
                    {
                        question: 'In a "short I/O wait" scenario with interrupts, the processor:',
                        options: ['Waits idle for the I/O to finish', 'Has no waiting time', 'Must restart the program', 'Cannot execute the second WRITE'],
                        correct: 1,
                        explanation: 'With interrupts, the processor continues executing other instructions while I/O completes, so there is no waiting time.'
                    }
                ]
            },
            {
                id: 'sp-quiz4',
                title: 'Lecture 4 · Buses (Interconnection) MCQs for midterm',
                questions: [
                    {
                        question: 'Why is an interconnection structure needed?',
                        options: ['To increase the cache size', 'To replace the ALU', 'Because all units (CPU, memory, I/O) must be connected, with different connection types for different units', 'To remove the need for memory'],
                        correct: 2,
                        explanation: 'CPU, memory, and I/O modules must all be interconnected, and each unit type has different connection requirements.'
                    },
                    {
                        question: 'Which of the following does a Memory module receive?',
                        options: ['Interrupts only', 'Addresses and control signals (Read, Write)', 'Only data from peripherals', 'Clock signals only'],
                        correct: 1,
                        explanation: 'Memory receives addresses to select a location and control signals (Read/Write) to specify the operation.'
                    },
                    {
                        question: 'Which of the following is an I/O module function?',
                        options: ['Receive data from a peripheral and send it to the computer', 'Execute arithmetic operations', 'Store instructions permanently', 'Calculate cache tags'],
                        correct: 0,
                        explanation: 'An I/O module interfaces peripherals with the computer: it receives data from a peripheral and forwards it.'
                    },
                    {
                        question: 'Which is NOT a CPU function?',
                        options: ['Reading instructions and data', 'Receiving and acting on interrupts', 'Sending control signals to other units', 'Spinning the disk platters directly'],
                        correct: 3,
                        explanation: 'Spinning disk platters is a mechanical/peripheral function, not a CPU function. The CPU reads instructions/data, handles interrupts, and sends control signals.'
                    },
                    {
                        question: 'The I/O module’s connection to the computer includes:',
                        options: ['Computing physical addresses', 'Replacing the CPU', 'Receiving addresses (e.g., a port number to identify a peripheral) and sending interrupt signals', 'Only sending data'],
                        correct: 2,
                        explanation: 'The I/O module receives addresses (like a port number identifying the peripheral) and sends interrupt signals to the computer.'
                    },
                    {
                        question: '"Unibus" (DEC PDP) is an example of:',
                        options: ['A cache design', 'An interconnection system', 'A memory type', 'An instruction format'],
                        correct: 1,
                        explanation: 'Unibus was the interconnection (bus) system used in DEC PDP computers.'
                    },
                    {
                        question: 'Which bus carries the memory read/write and I/O read/write signals?',
                        options: ['Control bus', 'Data bus', 'Address bus', 'Power bus'],
                        correct: 0,
                        explanation: 'The control bus carries command/status signals such as memory read/write and I/O read/write.'
                    },
                    {
                        question: 'Which bus determines the maximum memory capacity of the system?',
                        options: ['Data bus', 'Control bus', 'Power bus', 'Address bus'],
                        correct: 3,
                        explanation: 'The width of the address bus determines how many memory locations can be addressed, hence the maximum memory capacity.'
                    },
                    {
                        question: 'A dedicated bus is one that:',
                        options: ['Shares lines between address and data', 'Has separate data and address lines', 'Has no control lines', 'Is used only by the CPU'],
                        correct: 1,
                        explanation: 'A dedicated bus uses separate lines for address and data, unlike a multiplexed bus.'
                    },
                    {
                        question: 'A multiplexed bus has which advantage and disadvantage?',
                        options: ['More lines, simpler control', 'Faster, but costs more lines', 'Fewer lines, but more complex control and reduced performance', 'No advantages'],
                        correct: 2,
                        explanation: 'Multiplexing shares lines between address and data, saving lines but requiring more complex control and reducing performance.'
                    },
                    {
                        question: 'Bus arbitration is needed because:',
                        options: ['Only one module may control the bus at a time, but more than one (e.g., CPU and DMA controller) may want it', 'The bus has no data lines', 'The CPU is too slow', 'Memory cannot be shared'],
                        correct: 0,
                        explanation: 'Only one module can control the bus at a time, but several (CPU, DMA, I/O) may request it, so arbitration is needed.'
                    },
                    {
                        question: 'In centralised arbitration:',
                        options: ['Each module has control logic to claim the bus', 'A single hardware device (bus controller or arbiter) controls bus access, and it may be part of the CPU or separate', 'No device controls the bus', 'Only the memory decides'],
                        correct: 1,
                        explanation: 'Centralised arbitration uses a single arbiter device (possibly inside the CPU) to decide which module gets the bus.'
                    },
                    {
                        question: 'In distributed arbitration:',
                        options: ['A single arbiter decides', 'The CPU always wins', 'The bus is disabled', 'Each module may claim the bus, with control logic on all modules'],
                        correct: 3,
                        explanation: 'In distributed arbitration there is no central arbiter; every module has control logic and may claim the bus.'
                    },
                    {
                        question: 'Which of the following is NOT carried on the control bus?',
                        options: ['Interrupt request', 'Clock signals', 'Bus request/grant', 'The program data words being transferred'],
                        correct: 3,
                        explanation: 'Data words travel on the data bus. The control bus carries interrupt requests, clock signals, and bus request/grant lines.'
                    }
                ]
            },
            {
                id: 'sp-quiz5',
                title: 'Lecture 5 · Cache Memory (Memory System Overview & Hierarchy) MCQs for midterm',
                questions: [
                    {
                        question: 'Memory is primarily of which three types?',
                        options: ['Cache, primary (main), and secondary memory', 'ROM, PROM, EPROM', 'Register, ALU, bus', 'Static, dynamic, flash only'],
                        correct: 0,
                        explanation: 'The three main types are cache, primary (main) memory, and secondary memory.'
                    },
                    {
                        question: 'Which relationship holds across memory technologies?',
                        options: ['Faster access time, lower cost per bit', 'Greater capacity, greater cost per bit', 'Faster access time, greater cost per bit', 'Greater capacity, faster access time'],
                        correct: 2,
                        explanation: 'Faster memory costs more per bit; slower, larger memories cost less per bit.'
                    },
                    {
                        question: 'Which of the following is NOT true according to the lecture?',
                        options: ['Faster access time means greater cost per bit', 'Greater capacity means smaller cost per bit', 'Greater capacity means slower access time', 'Greater capacity means faster access time'],
                        correct: 3,
                        explanation: 'Greater capacity actually means slower access time, not faster — capacity and speed trade off.'
                    },
                    {
                        question: 'The way out of the trade-off between capacity, access time, and cost is:',
                        options: ['Employing a memory hierarchy', 'Using only the fastest memory', 'Using a single large memory', 'Removing the cache'],
                        correct: 0,
                        explanation: 'A memory hierarchy combines fast/expensive and slow/cheap memories to satisfy all needs.'
                    },
                    {
                        question: 'Going down the memory hierarchy:',
                        options: ['Cost per bit increases and capacity decreases', 'Cost per bit decreases, capacity and access time increase, and the processor accesses it less frequently', 'Access time and capacity both decrease', 'Everything increases'],
                        correct: 1,
                        explanation: 'Down the hierarchy: cost per bit and speed decrease, while capacity increases and access frequency drops.'
                    },
                    {
                        question: 'A "hit" means:',
                        options: ['The word is not found in the faster memory', 'The memory is full', 'The accessed word is found in the faster memory', 'The processor halts'],
                        correct: 2,
                        explanation: 'A hit occurs when the accessed word is found in the faster (cache) memory.'
                    },
                    {
                        question: 'A "miss" means:',
                        options: ['The word is found in the faster memory', 'A write operation finished', 'A hardware failure occurred', 'The accessed word is not found in the faster memory'],
                        correct: 3,
                        explanation: 'A miss occurs when the accessed word is not found in the faster memory and must come from a lower level.'
                    },
                    {
                        question: 'The hit ratio describes:',
                        options: ['How many times the faster memory is accessed successfully relative to all accesses', 'The memory capacity', 'The clock rate', 'The bus width'],
                        correct: 0,
                        explanation: 'The hit ratio is the fraction of accesses that find the word in the faster memory.'
                    },
                    {
                        question: 'Which memory is described as "Processor Memory"?',
                        options: ['Secondary memory', 'Cache memory', 'Main memory', 'ROM only'],
                        correct: 1,
                        explanation: 'Cache memory is the fastest level and is described as processor memory.'
                    },
                    {
                        question: 'According to the lecture, disk cache is generally:',
                        options: ['A purely hardware technique', 'Part of the CPU', 'A purely software technique', 'The same as L1 cache'],
                        correct: 2,
                        explanation: 'Disk cache is generally implemented as a purely software technique.'
                    },
                    {
                        question: 'Which level of the hierarchy does the processor access least frequently?',
                        options: ['Registers', 'Cache', 'Main memory', 'Secondary memory'],
                        correct: 3,
                        explanation: 'Secondary memory is the slowest, largest level and is accessed least frequently.'
                    },
                    {
                        question: 'Why can’t a single memory technology satisfy all needs?',
                        options: ['Because of the trade-off among capacity, access time, and cost', 'Because memory has no capacity', 'Because all memories are equally fast', 'Because the CPU cannot access memory'],
                        correct: 0,
                        explanation: 'No single technology offers high capacity, fast access, and low cost at once — hence the hierarchy.'
                    }
                ]
            },
            {
                id: 'sp-quiz6',
                title: 'Lecture 6 · Cache Design, Performance & Mapping MCQs for midterm',
                questions: [
                    {
                        question: 'Effective Access Time (EAT) with a hit rate h, cache time t1, and next-level time t2 is:',
                        options: ['h·t2 + (1−h)·t1', 'h·t1 + (1−h)(t1 + t2)', 't1 + t2', 'h·(t1 + t2)'],
                        correct: 1,
                        explanation: 'On a hit (probability h) only t1 is paid; on a miss (1−h) both t1 and t2 are paid.'
                    },
                    {
                        question: 'With t1 = 3 ns, t2 = 40 ns, and an 80% hit rate, the EAT is:',
                        options: ['7 ns', '9 ns', '11 ns', '43 ns'],
                        correct: 2,
                        explanation: 'EAT = 0.8×3 + 0.2×(3+40) = 2.4 + 8.6 = 11 ns.'
                    },
                    {
                        question: 'With the same times and a 90% hit rate, the EAT is:',
                        options: ['5 ns', '7 ns', '11 ns', '3 ns'],
                        correct: 1,
                        explanation: 'EAT = 0.9×3 + 0.1×(3+40) = 2.7 + 4.3 = 7 ns.'
                    },
                    {
                        question: 'CPI is defined as:',
                        options: ['Total clock cycles / Number of instructions', 'Instructions / Total clock cycles', 'Clock rate × instructions', 'Miss rate × miss penalty'],
                        correct: 0,
                        explanation: 'CPI (cycles per instruction) = total clock cycles divided by the number of instructions.'
                    },
                    {
                        question: 'CPU time equals:',
                        options: ['Instruction count / CPI', 'CPI / Clock cycle time', 'Miss rate × Hit time', 'Instruction count × CPI × Clock cycle time'],
                        correct: 3,
                        explanation: 'CPU time = instruction count × CPI × clock cycle time.'
                    },
                    {
                        question: 'Memory-stall cycles are calculated as:',
                        options: ['Memory accesses × Hit rate', 'Memory accesses × Miss rate × Miss penalty', 'Instructions × Base CPI', 'Miss rate / Miss penalty'],
                        correct: 1,
                        explanation: 'Stall cycles = number of memory accesses × miss rate × miss penalty.'
                    },
                    {
                        question: 'IPC (Instructions Per Cycle) is:',
                        options: ['Equal to CPI', 'CPI × clock rate', 'The inverse of CPI (1 / CPI)', 'Miss rate × penalty'],
                        correct: 2,
                        explanation: 'IPC is the inverse of CPI: IPC = 1 / CPI.'
                    },
                    {
                        question: 'Given: I-cache miss rate 2%, D-cache miss rate 4%, base CPI 2, miss penalty 100 cycles, loads/stores 36%. For 100 instructions, the I-cache stall cycles are:',
                        options: ['144', '200', '344', '544'],
                        correct: 1,
                        explanation: 'I-cache accesses = 100 (one fetch per instruction): 100 × 0.02 × 100 = 200 cycles.'
                    },
                    {
                        question: 'In the same example, the D-cache stall cycles are:',
                        options: ['36', '100', '144', '200'],
                        correct: 2,
                        explanation: 'Data accesses = 36% of 100 = 36: 36 × 0.04 × 100 = 144 cycles.'
                    },
                    {
                        question: 'In the same example, the total memory-stall cycles are:',
                        options: ['200', '344', '544', '144'],
                        correct: 1,
                        explanation: 'Total stalls = 200 (I-cache) + 144 (D-cache) = 344 cycles.'
                    },
                    {
                        question: 'In the same example, the total CPI is:',
                        options: ['2.00', '3.44', '5.44', '6.44'],
                        correct: 2,
                        explanation: 'Total cycles = base (100×2 = 200) + stalls 344 = 544; CPI = 544/100 = 5.44.'
                    },
                    {
                        question: 'A hit time of 1 cycle, miss rate of 5%, and miss penalty of 20 cycles give an AMAT of:',
                        options: ['2 cycles', '1 cycle', '5 cycles', '21 cycles'],
                        correct: 0,
                        explanation: 'AMAT = 1 + 0.05×20 = 1 + 1 = 2 cycles.'
                    },
                    {
                        question: 'A 4 GHz processor has a cycle time of:',
                        options: ['4 ns', '0.4 ns', '0.25 ns', '2.5 ns'],
                        correct: 2,
                        explanation: 'Cycle time = 1 / 4 GHz = 0.25 ns.'
                    },
                    {
                        question: 'With a 100 ns main memory access at 4 GHz, the memory penalty in cycles is:',
                        options: ['25', '400', '100', '4000'],
                        correct: 1,
                        explanation: 'Penalty = 100 ns / 0.25 ns = 400 cycles.'
                    },
                    {
                        question: 'With base CPI = 1, L1 miss rate = 2%, and a 400-cycle memory penalty (no L2), the CPI is:',
                        options: ['1.02', '3.4', '9', '400'],
                        correct: 2,
                        explanation: 'CPI = 1 + 0.02×400 = 1 + 8 = 9.'
                    },
                    {
                        question: 'After adding an L2 (20 cycles, global miss rate 0.5%), the CPI becomes:',
                        options: ['2.6', '3.4', '9', '1.4'],
                        correct: 1,
                        explanation: 'The L2 absorbs most misses with only a 20-cycle local penalty, so the effective miss penalty drops and the CPI falls to about 3.4 in the lecture\'s worked example.'
                    },
                    {
                        question: 'The speedup from adding the L2 in that example is approximately:',
                        options: ['1.5×', '3.4×', '2.6×', '9×'],
                        correct: 2,
                        explanation: 'Speedup = old CPI / new CPI = 9 / 3.4 ≈ 2.6×.'
                    },
                    {
                        question: 'What is the design focus of L1 and L2 caches?',
                        options: ['L1 large and slow; L2 small and fast', 'Both are identical', 'L1 is secondary memory', 'L1 small and fast (low hit time); L2 larger and more associative (low miss rate)'],
                        correct: 3,
                        explanation: 'L1 optimizes hit time (small, fast); L2 optimizes miss rate (larger, more associative).'
                    },
                    {
                        question: 'The hardware unit that translates virtual addresses into physical addresses is the:',
                        options: ['ALU', 'MMU', 'Control unit', 'DMA controller'],
                        correct: 1,
                        explanation: 'The Memory Management Unit (MMU) performs virtual-to-physical address translation.'
                    },
                    {
                        question: 'The TLB (Translation Lookaside Buffer) is:',
                        options: ['A type of disk', 'A cache of recent virtual-to-physical address translations', 'A bus arbiter', 'A register file'],
                        correct: 1,
                        explanation: 'The TLB caches recent page-table translations to speed up address translation.'
                    },
                    {
                        question: 'According to the lecture, which levels use physical addressing?',
                        options: ['L1 only', 'None', 'L2, L3, and main memory', 'All levels use virtual addressing'],
                        correct: 2,
                        explanation: 'L1 uses virtual addressing via the TLB; lower levels (L2, L3, main memory) use physical addresses.'
                    },
                    {
                        question: 'Page size = 1024 bytes and logical address = 3100. What are the page number P and offset D?',
                        options: ['P = 2, D = 28', 'P = 3, D = 28', 'P = 3, D = 1024', 'P = 7, D = 28'],
                        correct: 1,
                        explanation: 'P = floor(3100/1024) = 3; D = 3100 mod 1024 = 28.'
                    },
                    {
                        question: 'If page 3 maps to frame 7 (page size 1024, offset 28), the physical address is:',
                        options: ['3100', '7168', '28', '7196'],
                        correct: 3,
                        explanation: 'Physical address = frame × page size + offset = 7×1024 + 28 = 7196.'
                    },
                    {
                        question: 'In direct mapping, a given memory block can map to how many cache locations?',
                        options: ['Exactly one', 'Two', 'Any', 'Four'],
                        correct: 0,
                        explanation: 'Direct mapping assigns each memory block to exactly one cache location (block mod number of lines).'
                    },
                    {
                        question: 'In a 16-byte memory with a 4-byte cache (four 1-byte blocks), locations 0, 4, 8, 12 map to:',
                        options: ['Cache block 1', 'Cache block 0', 'Cache block 2', 'Different blocks each'],
                        correct: 1,
                        explanation: 'Locations 0, 4, 8, 12 differ by multiples of the 4-byte cache size, so all map to cache block 0 — causing conflict misses.'
                    },
                    {
                        question: 'Address 14 (1110 binary) with a 4-block direct-mapped cache maps to cache block:',
                        options: ['0', '1', '3', '2'],
                        correct: 3,
                        explanation: 'With 4 blocks, the index is the 2 least significant bits: 14 mod 4 = 2.'
                    },
                    {
                        question: 'Taking the least significant k bits of an address is equivalent to:',
                        options: ['Address / 2ᵏ', 'Address × 2ᵏ', 'Address mod 2ᵏ', 'Address + 2ᵏ'],
                        correct: 2,
                        explanation: 'The low k bits give the remainder mod 2ᵏ, which selects the cache set/block.'
                    },
                    {
                        question: 'In the worked comparison (4-line cache), which mapping gave the fewest misses?',
                        options: ['Direct mapped (5 misses)', 'Fully associative (3 misses)', '2-way set associative (4 misses)', 'All were equal'],
                        correct: 1,
                        explanation: 'Fully associative had the fewest misses (3), since any block can go anywhere.'
                    },
                    {
                        question: 'How many compulsory misses occur in every design in that example?',
                        options: ['0', '2', '3', '5'],
                        correct: 2,
                        explanation: 'Compulsory misses = first access to each unique block = 3 in every mapping.'
                    },
                    {
                        question: 'A compulsory miss is:',
                        options: ['A miss caused by a conflict', 'The first access to a block, so the cache cannot have it yet', 'A miss caused by a full disk', 'A miss that never happens'],
                        correct: 1,
                        explanation: 'A compulsory (cold) miss happens on the first access to a block — the cache cannot contain it yet.'
                    },
                    {
                        question: 'A conflict miss happens when:',
                        options: ['A block is accessed for the first time', 'The CPU is idle', 'A block was evicted because another block needed the same place', 'The bus is busy'],
                        correct: 2,
                        explanation: 'A conflict miss occurs when a needed block was evicted because another block mapped to the same cache location.'
                    },
                    {
                        question: 'What is the trade-off of increasing associativity?',
                        options: ['Fewer conflict misses, but more comparators and a slightly longer hit time', 'More conflict misses and lower cost', 'No change in misses', 'Fewer comparators and a faster hit time'],
                        correct: 0,
                        explanation: 'Higher associativity reduces conflict misses but requires more comparators and slightly increases hit time.'
                    },
                    {
                        question: 'For a 4-line cache, how many index bits do direct mapped, 2-way set associative, and fully associative use, respectively?',
                        options: ['1, 2, 0', '2, 1, 0', '0, 1, 2', '2, 2, 2'],
                        correct: 1,
                        explanation: '4 lines: direct uses 2 index bits (4 sets), 2-way uses 1 bit (2 sets of 2), fully associative uses 0 bits.'
                    },
                    {
                        question: 'When associativity doubles:',
                        options: ['The index gains 1 bit and the tag loses 1 bit', 'Both gain 1 bit', 'The index loses 1 bit and the tag gains 1 bit', 'Nothing changes'],
                        correct: 2,
                        explanation: 'Doubling associativity halves the number of sets, so the index loses 1 bit and the tag gains 1 bit.'
                    },
                    {
                        question: 'Which address field selects the word inside a cache block?',
                        options: ['Tag', 'Index', 'Set', 'Offset'],
                        correct: 3,
                        explanation: 'The offset field selects the specific word/byte within the cache block.'
                    },
                    {
                        question: 'I-cache miss rate 1%, D-cache miss rate 5%, base CPI 1.5, miss penalty 50, loads/stores 20%. The CPI is:',
                        options: ['1.5', '2.0', '2.5', '3.5'],
                        correct: 2,
                        explanation: 'For 100 instructions: I-stalls = 100×0.01×50 = 50; D accesses = 20, D-stalls = 20×0.05×50 = 50. CPI = (100×1.5 + 50 + 50)/100 = 2.5.'
                    },
                    {
                        question: 'Hit time = 2 cycles, miss rate = 10%, miss penalty = 30 cycles. The AMAT is:',
                        options: ['3 cycles', '5 cycles', '32 cycles', '2.3 cycles'],
                        correct: 1,
                        explanation: 'AMAT = 2 + 0.10×30 = 2 + 3 = 5 cycles.'
                    },
                    {
                        question: 'A 4-line cache receives blocks 1, 5, 1, 9. How many misses with direct mapping and with fully associative?',
                        options: ['4 and 3', '3 and 3', '4 and 4', '2 and 2'],
                        correct: 0,
                        explanation: 'Direct: all of 1, 5, 9 map to set 1 (mod 4), so the repeated 1 misses again — 4 misses. Fully associative keeps all blocks, so the second 1 hits — 3 misses.'
                    }
                ]
            }



        ]
    },
    {
        id: 'sd',
        name: 'System Design',
        code: 'SD406',
        icon: 'layout',
        description: 'Design and building software systems',
        quizzes: [
            {
                id: 'sd-quiz1',
                title: 'MCQs on lecture -1',
                questions: [
                    {
                        question: 'What is the primary focus of AI system design?',
                        options: ['Writing code for a single AI model', 'Planning how components like data, models, users, and infrastructure work together', 'Replacing traditional software entirely', 'Training machine learning models only'],
                        correct: 1,
                        explanation: 'System design is about planning how different components of a system work together. In AI products, it includes code, data, models, users, feedback, APIs, infrastructure, security, monitoring, and UX.'
                    },
                    {
                        question: 'How does traditional software primarily differ from AI system design?',
                        options: ['Traditional software is always faster', 'Traditional software follows fixed rules, while AI systems learn, predict, or generate', 'AI systems do not use databases', 'Traditional software cannot scale'],
                        correct: 1,
                        explanation: 'Traditional software is deterministic and rule-based (e.g., if password correct → allow login). AI system design asks what the system should learn, predict, generate, or recommend, introducing uncertainty and data dependency.'
                    },
                    {
                        question: 'Which of the following is NOT a typical component of an AI system?',
                        options: ['AI models', 'Monitoring', 'Feedback', 'Only a standalone model with no infrastructure'],
                        correct: 3,
                        explanation: 'An AI system includes users, applications, data, AI models, APIs, infrastructure, monitoring, and feedback. The AI model is only one part of the full system.'
                    },
                    {
                        question: 'What does an AI product need to do beyond just having a good model?',
                        options: ['Solve a real user problem, work reliably, handle errors, protect data, scale, and improve', 'Only generate accurate predictions', 'Avoid using any user feedback', 'Operate without any monitoring'],
                        correct: 0,
                        explanation: 'A good model alone does not guarantee a good product. An AI product must solve a real user problem, work reliably, handle errors, protect data, scale to many users, give useful output, and improve over time.'
                    },
                    {
                        question: 'In the AI university assistant example, what is the correct order of system flow?',
                        options: ['Generate Answer → Search Documents → Student Question → Show Answer', 'Student Question → AI Assistant → Search University Documents → Generate Answer → Show Answer with Source', 'Search Documents → Student Question → Show Answer → AI Assistant', 'AI Assistant → Student Question → Generate Answer → Search Documents'],
                        correct: 1,
                        explanation: 'The flow is: Student asks a question → AI Assistant processes inquiry → Search University Documents → Generate Answer → Show Answer with Source. This requires UI, data, search, AI model, permissions, and monitoring.'
                    },
                    {
                        question: 'Which layer of an AI system is responsible for what the user sees and interacts with?',
                        options: ['Application Layer', 'Data Layer', 'User Experience Layer', 'AI/ML Layer'],
                        correct: 2,
                        explanation: 'The User Experience Layer is what the user sees and interacts with, such as web apps, mobile apps, chat interfaces, dashboards, voice assistants, or API interfaces.'
                    },
                    {
                        question: 'What is the role of the Application Layer in an AI system?',
                        options: ['It contains the intelligence of the system', 'It controls business logic, authentication, authorization, and workflow management', 'It stores all training data', 'It monitors model accuracy'],
                        correct: 1,
                        explanation: 'The Application Layer controls business logic. It includes authentication, authorization, user profiles, business rules, API endpoints, workflow management, and error handling.'
                    },
                    {
                        question: 'Which of the following is NOT part of the Data Layer in an AI system?',
                        options: ['Relational databases', 'Vector databases', 'Feature stores', 'User interface design'],
                        correct: 3,
                        explanation: 'The Data Layer includes relational databases, data warehouses, data lakes, feature stores, vector databases, document storage, logs, and events. User interface design belongs to the UX Layer.'
                    },
                    {
                        question: 'What does the AI/ML Layer contain?',
                        options: ['Only large language models', 'Classification, prediction, recommendation, NLP, computer vision, LLMs, embeddings, and RAG pipelines', 'Only databases and storage', 'Only monitoring tools'],
                        correct: 1,
                        explanation: 'The AI/ML Layer contains the intelligence of the system, including classification models, prediction models, recommendation models, NLP models, computer vision models, large language models, embedding models, and RAG pipelines.'
                    },
                    {
                        question: 'Why is continuous monitoring important in AI systems?',
                        options: ['To increase model size', 'To detect silent degradation in latency, accuracy, hallucination rate, cost, and bias', 'To replace the need for data', 'To eliminate the need for user feedback'],
                        correct: 1,
                        explanation: 'Without monitoring, AI systems may silently degrade. Important metrics include latency, error rate, model accuracy, hallucination rate, cost per request, user satisfaction, data operation, and bias or fairness issues.'
                    },
                    {
                        question: 'What is an intelligent digital product?',
                        options: ['A product that uses AI to improve the user experience', 'A product that only stores data', 'A product that uses fixed rules only', 'A product that does not learn from feedback'],
                        correct: 0,
                        explanation: 'An intelligent digital product uses AI to improve the user experience. It may understand the user, predict needs, personalize content, recommend actions, generate responses, automate tasks, and learn from feedback.'
                    },
                    {
                        question: 'What is a cognitive experience?',
                        options: ['A user experience where the system appears to think, understand, or assist intelligently', 'A system that only follows fixed rules', 'A database management system', 'A hardware component'],
                        correct: 0,
                        explanation: 'A cognitive experience is a user experience where the system appears to think, understand, or assist intelligently, such as understanding questions, recommending needs, explaining complex information, adapting to behavior, and helping make decisions.'
                    },
                    {
                        question: 'Which of the following is a common AI product pattern?',
                        options: ['Prediction, classification, recommendation, ranking, search, summarization, generation', 'Only database indexing', 'Only file storage', 'Only network routing'],
                        correct: 0,
                        explanation: 'Common AI product patterns include prediction, classification, recommendation, ranking, search, summarization, generation, personalization, intelligent automation, and decision support. Each requires a different architecture.'
                    },
                    {
                        question: 'In a recommendation system, what is the basic architecture order?',
                        options: ['Generate Ranked Suggestions → Process Recommendation Model → Gather Input Data', 'Gather Input Data → Process Recommendation Model → Generate Ranked Suggestions', 'Process Recommendation Model → Gather Input Data → Generate Ranked Suggestions', 'Gather Input Data → Generate Ranked Suggestions → Process Recommendation Model'],
                        correct: 1,
                        explanation: 'The basic architecture is: Gather Input Data (user data, item data, interaction data) → Process Recommendation Model → Generate Ranked Suggestions.'
                    },
                    {
                        question: 'Why does big data matter for AI systems?',
                        options: ['It provides large training datasets, user behavior analysis, real-time events, personalization signals, and performance monitoring', 'It replaces the need for AI models', 'It eliminates privacy concerns', 'It makes systems deterministic'],
                        correct: 0,
                        explanation: 'Big data supports AI by providing large training datasets, user behavior analysis, real-time events, personalization signals, performance monitoring, and business insights. AI products become stronger when they learn from large, diverse, high-quality data.'
                    },
                    {
                        question: 'Which of the following is a major challenge in AI system design?',
                        options: ['Data quality, model accuracy, scalability, latency, cost, privacy, security, bias, explainability, hallucination, user trust, and continuous monitoring', 'Only model accuracy', 'Only cost', 'Only data storage'],
                        correct: 0,
                        explanation: 'Major challenges include data quality, model accuracy, scalability, latency, cost, privacy, security, bias, explainability, hallucination, user trust, and continuous monitoring. AI system design is complex because technical and human factors interact.'
                    },
                    {
                        question: 'What is the main goal of AI system design?',
                        options: ['Only intelligence', 'Valuable intelligence delivered safely to users', 'Only model accuracy', 'Only cost reduction'],
                        correct: 1,
                        explanation: 'The main goal is not only intelligence, but valuable intelligence delivered safely to users. Good AI systems must be useful, scalable, secure, reliable, and human-centered.'
                    },
                    {
                        question: 'What should UX in AI products communicate to users?',
                        options: ['Only what the AI can do', 'What the AI can do, what it cannot do, confidence or uncertainty, and human control options', 'Only the model\'s accuracy', 'Only the cost per request'],
                        correct: 1,
                        explanation: 'In AI products, UX must show what the AI can do, what the AI cannot do, confidence or uncertainty, and human control options.'
                    },
                    {
                        question: 'Which of the following is an example of an AI system?',
                        options: ['A simple calculator', 'A recommendation system, fraud detection, smart learning platforms, or autonomous vehicles', 'A static website with no data', 'A plain text editor'],
                        correct: 1,
                        explanation: 'Examples of AI systems include ChatGPT-like assistants, recommendation systems, fraud detection systems, smart learning platforms, medical diagnosis support, AI search engines, autonomous vehicles, predictive maintenance, intelligent customer service, and smart city traffic systems.'
                    },
                    {
                        question: 'What is the assignment at the end of Chapter 1?',
                        options: ['Train a large language model from scratch', 'Design a simple AI product idea and describe target user, user problem, AI capability, required data, expected output, and main risks', 'Build a database only', 'Write a research paper on AI ethics'],
                        correct: 1,
                        explanation: 'The assignment is to design a simple AI product idea and describe: target user, user problem, AI capability, required data, expected output, and main risks.'
                    }
                ]
            },
            {
                id: 'sd-quiz2',
                title: 'MCQs for midterm (Lecture 1: Introduction)',
                questions: [
                    { question: 'According to the lecture, what is the main difference between traditional software and AI systems?', options: ['Traditional software uses cloud infrastructure, while AI systems use local servers.', 'Traditional software is deterministic and rule-based, while AI systems rely on learning, prediction, and continuous evaluation.', 'AI systems do not require user interfaces, unlike traditional software.', 'Traditional software requires GPUs, while AI systems do not.'], correct: 1, explanation: 'Traditional software follows deterministic rules, while AI systems learn from data and produce probabilistic outputs that require evaluation.' },
                    { question: 'Which of the following best describes an "AI System"?', options: ['An isolated machine learning model trained on a dataset.', 'A complete digital system combining users, applications, data, models, APIs, infrastructure, monitoring, and feedback.', 'A software application that only uses fixed IF/ELSE rules.', 'A database management system.'], correct: 1, explanation: 'An AI system includes the model plus users, applications, data, APIs, infrastructure, monitoring, and feedback.' },
                    { question: 'In the "AI university assistant" example, what is the role of the "Application Layer"?', options: ['It generates the final text answer using an LLM.', 'It checks business rules (e.g., verifying if the student completed prerequisites).', 'It stores the vector embeddings of the university documents.', 'It manages the GPU infrastructure.'], correct: 1, explanation: 'The Application Layer handles business logic, rules, authentication, authorization, and workflow.' },
                    { question: 'Which layer of an AI system is responsible for tracking metrics like "Hallucination rate" and "Cost per request"?', options: ['The Data Layer', 'The Infrastructure Layer', 'The Monitoring and Governance Layer', 'The User Experience Layer'], correct: 2, explanation: 'Monitoring and Governance tracks performance, reliability, cost, fairness, privacy, and safety metrics.' },
                    { question: 'Why must the User Experience (UX) layer in AI products be designed differently from traditional software?', options: ['Because AI models never make mistakes.', 'Because UX must communicate AI uncertainty, limitations, and provide human control options.', 'Because AI products do not need a graphical interface.', 'Because users do not care about how AI works.'], correct: 1, explanation: 'AI UX must communicate uncertainty, limitations, confidence, and control because AI outputs may be incorrect or uncertain.' },
                    { question: 'What is a "Cognitive Experience" in the context of intelligent digital products?', options: ['A system that requires the user to manually program the AI.', 'A user experience where the system appears to think, understand, and intelligently assist the user.', 'A system that only displays raw data without any processing.', 'A system that automates 100% of decisions without human input.'], correct: 1, explanation: 'A cognitive experience is one where the system appears to understand and assist intelligently.' },
                    { question: 'Which of the following is an example of a "Recommendation" AI product pattern?', options: ['A system that translates text from English to Arabic.', 'A system that suggests movies or courses based on user behavior.', 'A system that summarizes long documents.', 'A system that detects fraud in bank transactions.'], correct: 1, explanation: 'Recommendation systems suggest items such as movies or courses based on user behavior and preferences.' },
                    { question: 'According to the lecture, what is the ultimate goal of an AI system?', options: ['To build the most complex neural network possible.', 'To deliver valuable intelligence safely to users.', 'To replace all human decision-making.', 'To use the maximum amount of GPU resources.'], correct: 1, explanation: 'The ultimate goal is valuable intelligence delivered safely and usefully to users.' },
                    { question: 'A "Problem Statement" in AI product design should answer which of the following questions?', options: ['Who has the problem, what is it, when does it occur, and why does it matter?', 'Which deep learning framework will we use?', 'How many GPUs do we need?', 'What is the exact code structure?'], correct: 0, explanation: 'A good problem statement identifies the user, problem, context, and importance before designing a solution.' },
                    { question: 'When is AI NOT recommended for a product?', options: ['When the problem requires personalization.', 'When the problem can be solved perfectly with simple rules and there is no reliable data.', 'When there are large datasets available.', 'When the user needs prediction capabilities.'], correct: 1, explanation: 'AI is usually unnecessary when simple rules can solve the problem perfectly or reliable data is unavailable.' },
                    { question: 'Which of the following is a "Functional Requirement" for an AI academic-support platform?', options: ['The system must return risk scores in under 2 seconds.', 'The system shall display student-risk scores and explain the main risk factors.', 'The system must have 99.9% availability.', 'The system must use AES-256 encryption.'], correct: 1, explanation: 'A functional requirement describes what the system must do, such as displaying scores and explaining risk factors.' },
                    { question: 'Which of the following is an "AI-Specific Requirement"?', options: ['The system shall authenticate users via SSO.', 'The model must have a Recall score of at least 85% and be fair across different demographic groups.', 'The UI must support dark mode.', 'The database must be PostgreSQL.'], correct: 1, explanation: 'AI-specific requirements include model quality, fairness, explainability, hallucination limits, and safety constraints.' },
                    { question: 'What does the "Acceptance Criteria" define in a user story?', options: ['The exact cost of the cloud infrastructure.', 'The conditions that must be met for a requirement to be considered complete and acceptable.', 'The list of team members responsible for the task.', 'The specific AI model to be used.'], correct: 1, explanation: 'Acceptance criteria define the conditions that must be satisfied for a requirement to be accepted.' },
                    { question: 'In the "AI Automation Hierarchy", what does "Level 3" represent?', options: ['Full Autonomy (AI acts completely alone).', 'AI provides information only.', 'AI acts after human approval (Human-in-the-loop).', 'AI gives recommendations without human review.'], correct: 2, explanation: 'Level 3 is human-in-the-loop automation, where AI acts only after human approval.' },
                    { question: 'Why are "Failure Scenarios" important in AI requirements engineering?', options: ['To prove that AI models are perfect.', 'To design for reliability and trust by planning how the system handles low confidence, missing data, or unsupported answers.', 'To reduce the cost of model training.', 'To eliminate the need for human oversight.'], correct: 1, explanation: 'Failure scenarios help design reliable systems that handle uncertainty and errors safely.' },
                    { question: 'According to the lecture, how do requirements directly affect system architecture?', options: ['Requirements determine the color scheme of the UI.', 'A requirement for "citations in answers" impacts the architecture by requiring document storage, embeddings, a vector database, and a citation generator.', 'Requirements do not affect architecture at all.', 'Requirements only affect the database choice.'], correct: 1, explanation: 'Requirements shape architecture because each capability requires specific components, data, and services.' },
                    { question: 'What are the "5 Vs" of Big Data?', options: ['Volume, Velocity, Variety, Veracity, Value.', 'Volume, Validity, Vision, Variety, Velocity.', 'Velocity, Versioning, Value, Verification, Volume.', 'Variety, Virtualization, Volume, Validity, Value.'], correct: 0, explanation: 'The 5 Vs are Volume, Velocity, Variety, Veracity, and Value.' },
                    { question: 'Which type of data is a JSON log file considered?', options: ['Structured Data', 'Semi-Structured Data', 'Unstructured Data', 'Transactional Data'], correct: 1, explanation: 'JSON has structure but does not follow a fixed relational schema, so it is semi-structured.' },
                    { question: 'What is the primary difference between Batch Processing and Stream Processing?', options: ['Batch processing handles continuous data, while stream processing handles data in scheduled groups.', 'Batch processing handles data in scheduled groups, while stream processing handles data continuously as events happen.', 'Batch processing is only used for images, while stream processing is for text.', 'Batch processing is faster than stream processing.'], correct: 1, explanation: 'Batch processing processes data in scheduled groups, while stream processing handles events continuously as they arrive.' },
                    { question: 'In the ETL process, when does data transformation happen?', options: ['After the data is loaded into the target system.', 'Before the data is stored in the target system.', 'During the data collection phase only.', 'Transformation does not happen in ETL.'], correct: 1, explanation: 'In ETL, transformation happens before loading data into the target system.' },
                    { question: 'What is a "Data Lake"?', options: ['A storage system that only stores cleaned, structured data for business intelligence.', 'A storage system that stores large amounts of raw data in various formats (CSV, JSON, images, etc.).', 'A database optimized for transactional processing.', 'A tool for generating embeddings.'], correct: 1, explanation: 'A data lake stores large amounts of raw data in many formats before it is processed or structured.' },
                    { question: 'What is the main advantage of a "Lakehouse" architecture?', options: ['It completely replaces the need for AI models.', 'It combines the large-scale storage of a Data Lake with the management and analytics of a Data Warehouse.', 'It only stores unstructured data.', 'It eliminates the need for data governance.'], correct: 1, explanation: 'A lakehouse combines flexible raw storage with stronger management and analytics.' },
                    { question: 'What is "Training-Serving Skew"?', options: ['When the model is too large for the server.', 'When the feature logic used during model training differs from the logic used in production.', 'When the LLM refuses to answer a question.', 'When the GPU server is too slow.'], correct: 1, explanation: 'Training-serving skew happens when feature logic differs between training and production.' },
                    { question: 'How does a "Feature Store" help in production ML systems?', options: ['By replacing the need for a database.', 'By ensuring feature consistency, enabling reuse, and preventing training-serving skew.', 'By generating the final text response for the user.', 'By providing GPU resources for model training.'], correct: 1, explanation: 'A feature store keeps features consistent and reusable across training and serving.' },
                    { question: 'In the RAG data ingestion pipeline, what is the correct order of steps?', options: ['Text Extraction -> Documents -> Cleaning -> Chunking -> Embedding -> Vector Database.', 'Documents -> Text Extraction -> Cleaning -> Chunking -> Embedding -> Vector Database.', 'Documents -> Embedding -> Chunking -> Vector Database -> Text Extraction.', 'Chunking -> Documents -> Cleaning -> Embedding -> Vector Database.'], correct: 1, explanation: 'The correct pipeline order is documents, text extraction, cleaning, chunking, embedding, and vector database storage.' },
                    { question: 'Which data quality dimension ensures that data is up-to-date and reflects the current state?', options: ['Accuracy', 'Completeness', 'Timeliness', 'Uniqueness'], correct: 2, explanation: 'Timeliness means the data is current and reflects the latest state.' },
                    { question: 'If a problem is simple and can be solved with explicit human-written rules (e.g., calculating a fixed fee), which approach is most appropriate?', options: ['Fine-Tuned LLM', 'RAG System', 'Rule-Based System', 'Deep Learning'], correct: 2, explanation: 'Rule-based systems are best when the problem can be solved exactly with explicit rules.' },
                    { question: 'Why is calling an LLM directly usually not enough for a real production product?', options: ['LLMs are too cheap and lack complexity.', 'LLMs may hallucinate, lack private domain knowledge, and pose privacy risks.', 'LLMs cannot process text.', 'LLMs do not require prompts.'], correct: 1, explanation: 'Production systems need retrieval, guardrails, domain data, and controls around the LLM.' },
                    { question: 'What is the difference between "Offline Inference" and "Online Inference"?', options: ['Offline inference generates predictions periodically (e.g., nightly), while online inference generates predictions immediately upon request.', 'Offline inference is faster than online inference.', 'Offline inference requires GPUs, while online inference does not.', 'Online inference is only used for batch reports.'], correct: 0, explanation: 'Offline inference runs in batches, while online inference responds to requests in real time.' },
                    { question: 'What is the purpose of a "Prompt Template" in production systems?', options: ['To make the model generate random answers.', 'To make model behavior more consistent, easier to test, and controlled by instructions and context.', 'To replace the need for a database.', 'To automatically scale the GPU infrastructure.'], correct: 1, explanation: 'Prompt templates make behavior more consistent, testable, and controlled.' },
                    { question: 'What is the core idea behind "Retrieval-Augmented Generation" (RAG)?', options: ['Training a model from scratch on all company data.', 'Connecting LLMs with external knowledge (retrieved documents) to generate grounded answers and reduce hallucination.', 'Replacing the LLM with a rule-based system.', 'Increasing the token limit of the LLM.'], correct: 1, explanation: 'RAG connects the LLM to external documents so answers are grounded in retrieved knowledge.' },
                    { question: 'In the RAG Query Pipeline, what happens immediately after "Vector Search" retrieves the relevant chunks?', options: ['The LLM generates the final answer.', 'The chunks are re-ranked (Reranking) based on relevance.', 'The documents are embedded.', 'The system extracts text from PDFs.'], correct: 1, explanation: 'After vector search, retrieved chunks are usually reranked before being passed to the LLM.' },
                    { question: 'What does "Hybrid Retrieval" combine to improve RAG accuracy?', options: ['Only Vector Search and Embeddings.', 'Keyword Search + Vector Search + Metadata Filtering + Reranking.', 'Deep Learning and Rule-Based Systems.', 'Batch Processing and Stream Processing.'], correct: 1, explanation: 'Hybrid retrieval combines keyword search, vector search, metadata filtering, and reranking.' },
                    { question: 'What is the role of "Model Routing" in AI Orchestration?', options: ['To route network traffic to different data centers.', 'To send simple requests to small, fast models and complex requests to advanced LLMs, optimizing cost and latency.', 'To train the model on different datasets.', 'To bypass safety guardrails.'], correct: 1, explanation: 'Model routing sends requests to the most appropriate model based on complexity, cost, and latency.' },
                    { question: 'Which of the following is an example of an AI "Guardrail"?', options: ['Increasing the GPU memory.', 'Prompt-injection detection, toxicity filtering, and citation validation.', 'Training the model for more epochs.', 'Adding more servers to the cluster.'], correct: 1, explanation: 'Guardrails include prompt-injection detection, toxicity filtering, citation validation, and other safety controls.' },
                    { question: 'What is the role of "Embeddings" in AI systems?', options: ['They convert data (text, images) into numerical vectors to enable semantic search and similarity matching.', 'They encrypt the data for security.', 'They compress the images to save storage.', 'They translate the text into different languages.'], correct: 0, explanation: 'Embeddings convert data into numerical vectors for semantic search and similarity matching.' },
                    { question: 'What is "Vertical Scaling" (Scale Up)?', options: ['Adding more servers to distribute the workload.', 'Increasing the resources (CPU, RAM, GPU) of an existing single machine.', 'Reducing the number of users.', 'Using multiple data centers.'], correct: 1, explanation: 'Vertical scaling increases the resources of one machine rather than adding more machines.' },
                    { question: 'Why are "Stateless Services" preferred in scalable architectures?', options: ['They are cheaper to build.', 'They do not store session data locally, so any server can handle any request, making load balancing easier.', 'They do not require an internet connection.', 'They automatically train AI models.'], correct: 1, explanation: 'Stateless services can be handled by any server because they do not depend on local session state.' },
                    { question: 'What is the purpose of a "Load Balancer"?', options: ['To train the AI model.', 'To distribute incoming requests among multiple service instances to prevent overload and improve availability.', 'To store the database backups.', 'To generate embeddings for the documents.'], correct: 1, explanation: 'A load balancer distributes requests across service instances to improve availability and reduce overload.' },
                    { question: 'What is the difference between "Reliability" and "Availability"?', options: ['Reliability is the percentage of time the system is operational; Availability is the probability of correct operation.', 'Availability is the percentage of time the system is operational; Reliability is the probability that a system performs correctly over a specified period.', 'They mean the exact same thing.', 'Reliability is for hardware, Availability is for software.'], correct: 1, explanation: 'Availability is uptime; reliability is the probability of correct operation over time.' },
                    { question: 'A system is highly available (99.99% uptime) but frequently gives wrong predictions. Which statement is true?', options: ['The system has high Reliability but low Availability.', 'The system has high Availability but low Reliability.', 'The system has high Fault Tolerance.', 'The system has high Observability.'], correct: 1, explanation: 'The system is up most of the time but often produces wrong results, so availability is high and reliability is low.' },
                    { question: 'What is a "Single Point of Failure" (SPOF)?', options: ['A component that is very expensive.', 'A component whose failure can bring down the entire system.', 'A server that is only used by one user.', 'A model that is only trained once.'], correct: 1, explanation: 'An SPOF is a component whose failure can bring down the entire system.' },
                    { question: 'What does the "Circuit Breaker" pattern do in a distributed AI system?', options: ['It increases the voltage of the GPU.', 'It prevents repeated calls to a failing service and allows fallback (e.g., cached responses or smaller models).', 'It automatically scales the database.', 'It encrypts the data between services.'], correct: 1, explanation: 'A circuit breaker stops repeated calls to a failing service and enables fallback behavior.' },
                    { question: 'Why is "Exponential Backoff" important when implementing retries?', options: ['To exponentially increase the size of the model.', 'To gradually increase the wait time between retries to prevent overwhelming a struggling service.', 'To multiply the number of servers automatically.', 'To speed up the GPU processing time.'], correct: 1, explanation: 'Exponential backoff increases retry delay gradually to avoid overwhelming a struggling service.' },
                    { question: 'Which architecture pattern is best for processing 10,000 large documents to generate embeddings without making the user wait?', options: ['Synchronous API calls', 'Asynchronous Processing with Message Queues', 'Vertical Scaling', 'Online Inference'], correct: 1, explanation: 'Asynchronous processing with queues prevents users from waiting for large batch jobs.' },
                    { question: 'What is "Backpressure" in the context of message queues?', options: ['The pressure applied to the GPU to increase speed.', 'Mechanisms (like queue limits or rate limiting) to control the flow when producers generate work faster than consumers can process it.', 'The process of encrypting messages in the queue.', 'The delay caused by the load balancer.'], correct: 1, explanation: 'Backpressure controls flow when producers create work faster than consumers can process it.' },
                    { question: 'What are the "Three Pillars of Observability"?', options: ['Load Balancing, Caching, and Queues.', 'Logs, Metrics, and Traces.', 'Users, Data, and Models.', 'RTO, RPO, and DR.'], correct: 1, explanation: 'The three pillars of observability are logs, metrics, and traces.' },
                    { question: 'In AI-specific monitoring, what does "Data Drift" refer to?', options: ['The physical movement of data between servers.', 'Changes in the input data distribution over time, which can degrade model performance.', 'The process of deleting old data.', 'The cost of storing data in the cloud.'], correct: 1, explanation: 'Data drift refers to changes in input data distribution over time that can degrade model performance.' },
                    { question: 'What is the difference between RTO and RPO in Disaster Recovery?', options: ['RTO is the acceptable data loss, RPO is the time to recover.', 'RTO is the time to recover, RPO is the acceptable data loss.', 'RTO is for AI models, RPO is for databases.', 'They mean the exact same thing.'], correct: 1, explanation: 'RTO is recovery time objective; RPO is recovery point objective or acceptable data loss.' },
                    { question: 'What does "Graceful Degradation" mean in AI systems?', options: ['The system shuts down completely when an error occurs.', 'The system provides reduced functionality (e.g., using a smaller model or cached answers) instead of failing entirely.', 'The system upgrades its GPU automatically.', 'The system deletes old data to save space.'], correct: 1, explanation: 'Graceful degradation provides reduced functionality instead of total failure.' },
                    { question: 'You are building a healthcare chatbot that must not give wrong medical advice. Which combination of design choices is best?', options: ['High automation (Level 5) + Direct LLM generation without RAG.', 'Human-in-the-loop + RAG pipeline with verified medical documents + Guardrails.', 'Batch processing + No monitoring.', 'Rule-based system + Vertical scaling only.'], correct: 1, explanation: 'A safe healthcare chatbot should use verified documents, guardrails, and human oversight.' },
                    { question: 'An AI system for student risk prediction shows 100% accuracy on the training dataset but performs poorly in production. What could be the most likely cause?', options: ['The LLM is hallucinating.', 'Training-Serving Skew and Data Drift.', 'The Load Balancer is misconfigured.', 'The system has too many GPUs.'], correct: 1, explanation: 'Training-serving skew and data drift commonly cause poor production performance despite high training accuracy.' },
                    { question: 'A company wants to build a customer support AI that answers questions using their private, frequently updated manuals and provides citations. What is the best architecture?', options: ['Fine-tune a foundation model from scratch every week.', 'Use a Rule-Based system.', 'Use a RAG system with an up-to-date Vector Database and a Citation Generator.', 'Use a stateless API without caching.'], correct: 2, explanation: 'RAG with an up-to-date vector database and citation generator is best for private, changing documents.' },
                    { question: 'During a traffic spike of 50,000 users, your AI system starts failing because the external LLM API is overwhelmed. Which architectural patterns should you implement?', options: ['Message Queues (for async), Circuit Breaker, Caching, and Graceful Degradation.', 'Vertical Scaling only.', 'Remove the Load Balancer.', 'Disable all Guardrails to make the system faster.'], correct: 0, explanation: 'Queues, circuit breakers, caching, and graceful degradation help handle spikes and external API failures.' },
                    { question: 'A team wants to build an AI model to predict student failure. What is the BEST starting point according to Requirements Engineering?', options: ['Build an AI model to predict student failure.', 'Help academic advisors identify students who may need support early enough to improve their academic performance.', 'Use a Large Language Model to answer student questions.', 'Deploy a RAG pipeline immediately.'], correct: 1, explanation: 'Requirements engineering should start with the user problem, not the technology.' },
                    { question: 'Which layer of the AI system is responsible for verifying if a user has permission to access a specific document during a RAG query?', options: ['The AI/ML Layer', 'The Application Layer (Authentication & Authorization)', 'The User Experience Layer', 'The Infrastructure Layer'], correct: 1, explanation: 'Authentication and authorization are handled by the Application Layer.' },
                    { question: 'If you want to serve millions of users with a RAG-based AI assistant, which combination of scalability techniques is most effective?', options: ['Vertical Scaling + Single Server + No caching.', 'Horizontal Scaling + Load Balancing + Caching + Dynamic Batching.', 'Stateless services + No database.', 'Rule-based system + Offline inference only.'], correct: 1, explanation: 'Horizontal scaling, load balancing, caching, and batching are common techniques for serving many users.' },
                    { question: 'In the context of the 5 Vs of Big Data, what does "Veracity" refer to?', options: ['The speed at which data arrives.', 'The different formats of data (text, images, etc.).', 'The uncertainty and quality issues of the data.', 'The amount of data stored.'], correct: 2, explanation: 'Veracity refers to the trustworthiness, quality, and uncertainty of data.' },
                    { question: 'Which statement best describes the relationship between AI models and AI products?', options: ['An AI model is the same as an AI product.', 'A good AI model alone guarantees a good AI product.', 'An AI product requires a model, but also needs data, infrastructure, UX, monitoring, and error handling to solve a real user problem.', 'AI products do not require AI models.'], correct: 2, explanation: 'An AI product needs more than a model: it also needs data, infrastructure, UX, monitoring, and reliability.' },
                    { question: 'If an external LLM API is unavailable, what is the best fallback strategy in a well-designed AI architecture?', options: ['The system crashes completely.', 'The orchestrator stops calling the API and uses cached responses, a smaller local model, or human escalation.', 'The system ignores the user\'s request.', 'The system increases the GPU power to compensate.'], correct: 1, explanation: 'A good fallback uses cached responses, a smaller model, or human escalation instead of failing completely.' }
                ]
            }
        ]
    }
];

// Global Variables
let currentQuiz = null;
let currentCourse = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let isDarkMode = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    try { lucide.createIcons(); } catch(e) { console.warn('Lucide icons not loaded:', e); }
    loadCourses();
    loadTheme();
});

// Load Theme
function loadTheme() {
    const savedTheme = localStorage.getItem('quiz_theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

// Toggle Theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('quiz_theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

// Update Theme Icon
function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.setAttribute('data-lucide', isDarkMode ? 'sun' : 'moon');
        try { lucide.createIcons(); } catch(e) {}
    }
}

// Load Courses on Page
function loadCourses() {
    const grid = document.getElementById('courses-grid');
    console.log('Loading courses...');
    console.log('COURSES data:', COURSES);
    
    grid.innerHTML = COURSES.map(course => {
        console.log(`Course ${course.id} has ${course.quizzes.length} quizzes`);
        return `
        <div class="course-card" onclick="showCourseQuizzes('${course.id}')">
            <div class="course-icon">
                <i data-lucide="${course.icon}"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <span class="quiz-count">${course.quizzes.length} Quizzes</span>
        </div>
    `;
    }).join('');
    try { lucide.createIcons(); } catch(e) {}
}

// Show Course Quizzes
function showCourseQuizzes(courseId) {
    console.log('showCourseQuizzes called with courseId:', courseId);
    currentCourse = COURSES.find(c => c.id === courseId);
    console.log('Found course:', currentCourse);
    const quizzes = currentCourse.quizzes;
    console.log('Quizzes array:', quizzes);
    console.log('Number of quizzes:', quizzes.length);
    
    if (quizzes.length === 0) {
        alert('No quizzes available for this course yet');
        return;
    }
    
    const modal = document.getElementById('quiz-modal');
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div style="flex: 1; overflow-y: auto; padding: 30px; width: 100%; box-sizing: border-box;">
            <h2 style="margin-bottom: 20px; text-align: center;">${currentCourse.name}</h2>
            <div style="display: flex; flex-direction: column; gap: 15px; max-width: 600px; margin: 0 auto;">
                ${quizzes.map((quiz, index) => `
                    <div class="course-card" onclick="startQuiz(${index})" style="cursor: pointer;">
                        <h3>${quiz.title}</h3>
                        <p>${quiz.questions.length} Questions</p>
                    </div>
                `).join('')}
                <button class="btn btn-outline" onclick="closeQuizModal()" style="margin-top: 20px;">Close</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    try { lucide.createIcons(); } catch(e) {}
}

// Start Quiz
function startQuiz(quizIndex) {
    currentQuiz = currentCourse.quizzes[quizIndex];
    currentQuestionIndex = 0;
    userAnswers = {};
    
    console.log('Starting quiz:', currentQuiz.title);
    console.log('Number of questions:', currentQuiz.questions.length);
    console.log('First question:', currentQuiz.questions[0]);
    
    const modal = document.getElementById('quiz-modal');
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div class="quiz-sidebar">
            <h3>Questions</h3>
            <div class="question-nav" id="question-nav"></div>
            <button class="btn-return" onclick="returnToCourseList()" style="margin-top: 20px; width: 100%;">&#8592; Return to Courses</button>
        </div>
        <div class="quiz-main">
            <button class="close-modal" onclick="closeQuizModal()">&#xd7;</button>
            <div class="quiz-header">
                <h2>${currentQuiz.title}</h2>
                <span class="quiz-progress" id="quiz-progress">Question 1 of ${currentQuiz.questions.length}</span>
            </div>
            <div class="mobile-progress-bar" id="mobile-progress-bar"></div>
            <div id="question-container"></div>
            <div class="mobile-nav">
                <button id="mobile-prev" onclick="mobilePrev()" disabled>&#8592; Prev</button>
                <button style="flex:0.8;background:#667eea;color:white;border-color:#667eea;font-size:0.8rem;" onclick="openMobileQList()">&#9776; List</button>
                <span class="mobile-nav-counter" id="mobile-nav-counter">1 / ${currentQuiz.questions.length}</span>
                <button id="mobile-next" onclick="mobileNext()">Next &#8594;</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    console.log('Modal activated, now rendering nav and question...');
    renderQuestionNav();
    renderCurrentQuestion();
    try { lucide.createIcons(); } catch(e) {}
}

// Render Question Navigation
function renderQuestionNav() {
    const nav = document.getElementById('question-nav');
    nav.innerHTML = currentQuiz.questions.map((_, idx) => `
        <div class="question-nav-item ${idx === currentQuestionIndex ? 'active' : ''} ${userAnswers[idx] !== undefined ? (userAnswers[idx].correct ? 'correct' : 'incorrect') : ''}" 
             onclick="goToQuestion(${idx})">
            ${idx + 1}
        </div>
    `).join('');
}

// Go to Specific Question
function goToQuestion(index) {
    currentQuestionIndex = index;
    renderQuestionNav();
    renderCurrentQuestion();
}

// Render Current Question
function renderCurrentQuestion() {
    console.log('=== renderCurrentQuestion START ===');
    const container = document.getElementById('question-container');
    console.log('Container element:', container);
    
    if (!container) {
        console.error('question-container not found in DOM');
        alert('Error: question-container not found');
        return;
    }
    
    console.log('currentQuestionIndex:', currentQuestionIndex);
    console.log('currentQuiz:', currentQuiz);
    console.log('currentQuiz.questions:', currentQuiz.questions);
    console.log('currentQuiz.questions.length:', currentQuiz.questions.length);
    
    const question = currentQuiz.questions[currentQuestionIndex];
    console.log('Question at index:', currentQuestionIndex, question);
    
    const answered = userAnswers[currentQuestionIndex] !== undefined;
    
    if (!question) {
        container.innerHTML = '<p style="color: red; font-size: 20px;">ERROR: Question not found at index ' + currentQuestionIndex + '</p>';
        console.error('Question is null/undefined');
        return;
    }
    
    const html = `
        <div class="quiz-question">
            <h4>${currentQuestionIndex + 1}. ${question.question}</h4>
            ${question.options.map((opt, optIdx) => `
                <label class="quiz-option ${answered ? (optIdx === question.correct ? 'correct' : (userAnswers[currentQuestionIndex].selected === optIdx ? 'incorrect' : '')) : ''} ${answered ? 'disabled' : ''}" 
                       onclick="${answered ? '' : `selectAnswer(${optIdx})`}">
                    <input type="radio" name="q${currentQuestionIndex}" value="${optIdx}" ${answered ? (userAnswers[currentQuestionIndex].selected === optIdx ? 'checked' : '') : ''}>
                    <span>${opt}</span>
                </label>
            `).join('')}
            ${answered ? `
                <div class="explanation show">
                    <h5>Explanation</h5>
                    <p>${question.explanation || 'No explanation provided.'}</p>
                </div>
            ` : ''}
        </div>
    `;
    
    console.log('Setting innerHTML...');
    container.innerHTML = html;
    console.log('innerHTML set successfully');
    console.log('Container content after set:', container.innerHTML);
    
    const progressEl = document.getElementById('quiz-progress');
    if (progressEl) {
        progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    }
    console.log('=== renderCurrentQuestion END ===');
    renderMobileDots();
    updateMobileNav();
}


// Mobile: Prev question
function mobilePrev() {
    if (currentQuestionIndex > 0) {
        goToQuestion(currentQuestionIndex - 1);
    }
}

// Mobile: Next question
function mobileNext() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        goToQuestion(currentQuestionIndex + 1);
    }
}

// Render mobile dot progress bar
function renderMobileDots() {
    const bar = document.getElementById('mobile-progress-bar');
    if (!bar) return;
    bar.innerHTML = currentQuiz.questions.map((_, idx) => {
        let cls = 'mobile-dot';
        if (idx === currentQuestionIndex) cls += ' active';
        else if (userAnswers[idx] !== undefined) cls += userAnswers[idx].correct ? ' correct' : ' incorrect';
        return `<div class="${cls}" onclick="goToQuestion(${idx})"></div>`;
    }).join('');
    // Scroll active dot into view
    const activeDot = bar.querySelector('.mobile-dot.active');
    if (activeDot) activeDot.scrollIntoView({ block: 'nearest', inline: 'center' });
}

// Update mobile prev/next button states
function updateMobileNav() {
    const prev = document.getElementById('mobile-prev');
    const next = document.getElementById('mobile-next');
    const counter = document.getElementById('mobile-nav-counter');
    if (prev)    prev.disabled = currentQuestionIndex === 0;
    if (next)    next.disabled = currentQuestionIndex === currentQuiz.questions.length - 1;
    if (counter) counter.textContent = (currentQuestionIndex + 1) + ' / ' + currentQuiz.questions.length;
}


// Open mobile question-list overlay
function openMobileQList() {
    const overlay = document.getElementById('mobile-qlist-overlay');
    const grid    = document.getElementById('mobile-qlist-grid');
    if (!overlay || !grid) return;
    grid.innerHTML = currentQuiz.questions.map((_, idx) => {
        let cls = 'question-nav-item';
        if (idx === currentQuestionIndex) cls += ' active';
        else if (userAnswers[idx] !== undefined) cls += userAnswers[idx].correct ? ' correct' : ' incorrect';
        return `<div class="${cls}" onclick="closeMobileQList();goToQuestion(${idx})">${idx + 1}</div>`;
    }).join('');
    overlay.classList.add('open');
}

// Close mobile question-list overlay
function closeMobileQList(event) {
    const overlay = document.getElementById('mobile-qlist-overlay');
    if (overlay) overlay.classList.remove('open');
}

// Select Answer
function selectAnswer(optionIndex) {
    const question = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = optionIndex === question.correct;
    
    userAnswers[currentQuestionIndex] = {
        selected: optionIndex,
        correct: isCorrect
    };
    
    renderQuestionNav();
    renderCurrentQuestion();
}

// Return to Course List
function returnToCourseList() {
    const courseId = currentCourse.id;
    document.getElementById('quiz-modal').classList.remove('active');
    currentQuiz = null;
    currentCourse = null;
    currentQuestionIndex = 0;
    userAnswers = {};
    showCourseQuizzes(courseId);
}

// Submit Quiz
function submitQuiz(event) {
    event.preventDefault();
    
    let correctCount = 0;
    const totalQuestions = currentQuiz.questions.length;
    
    currentQuiz.questions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    showResults(score, correctCount, totalQuestions);
}

// Show Results
function showResults(score, correctCount, totalQuestions) {
    const container = document.getElementById('quiz-container');
    const scoreClass = score >= 70 ? 'score-high' : score >= 50 ? 'score-medium' : 'score-low';
    
    container.innerHTML = `
        <div class="quiz-results">
            <h2>Your Result</h2>
            <h3 class="${scoreClass}">${score}%</h3>
            <p>You answered ${correctCount} correctly out of ${totalQuestions} questions</p>
            <button class="btn btn-primary" onclick="closeQuizModal()" style="margin-top: 30px;">Close</button>
        </div>
    `;
}

// Close Quiz Modal
function closeQuizModal() {
    document.getElementById('quiz-modal').classList.remove('active');
    currentQuiz = null;
    currentCourse = null;
}
