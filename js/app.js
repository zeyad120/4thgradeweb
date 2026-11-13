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
                id: 'av-quiz1',
                title: 'Questions on Lecture 1,2 (PART 1  -  Pattern Recognition & AI)',
                questions: [
                    {
                        question: 'What is Pattern Recognition?',
                        options: ['Storing large amounts of data', 'Automatically discovering regularities in data and using them to make decisions', 'Creating databases', 'Programming robots manually'],
                        correct: 1,
                        explanation: 'Pattern Recognition is the automatic discovery of regularities/patterns in data and using them to make decisions such as classification.'
                    },
                    {
                        question: 'Which of the following can be considered input data for a Pattern Recognition system?',
                        options: ['Images', 'Sound', 'Text', 'All of the above'],
                        correct: 3,
                        explanation: 'Pattern Recognition can work with many types of data, including images, sound, text, and numerical data.'
                    },
                    {
                        question: 'What is the main goal of Pattern Recognition?',
                        options: ['To store data', 'To put each input into the correct class', 'To increase computer memory', 'To remove all data'],
                        correct: 1,
                        explanation: 'The goal is to assign each input to the correct class using previously learned knowledge or statistical information.'
                    },
                    {
                        question: 'Which sequence best represents the general Pattern Recognition process?',
                        options: ['Decision -> Data -> Pattern', 'Data -> Pattern -> Decision', 'Pattern -> Data -> Decision', 'Decision -> Pattern -> Data'],
                        correct: 1,
                        explanation: 'The system receives data, discovers patterns, and then makes a decision.'
                    },
                    {
                        question: 'Which of the following is an example of Pattern Recognition?',
                        options: ['Face recognition', 'Spam detection', 'Handwriting recognition', 'All of the above'],
                        correct: 3,
                        explanation: 'All three applications identify patterns and use them to make decisions.'
                    },
                    {
                        question: 'What is the correct order of a Pattern Recognition system?',
                        options: ['Classification -> Sensor -> Preprocessing -> Feature Extraction', 'Sensor -> Preprocessing -> Feature Extraction -> Classification', 'Feature Extraction -> Sensor -> Classification -> Preprocessing', 'Sensor -> Classification -> Preprocessing -> Feature Extraction'],
                        correct: 1,
                        explanation: 'The four stages are: Sensor -> Preprocessing -> Feature Extraction -> Classification.'
                    },
                    {
                        question: 'What is the purpose of the Sensor stage?',
                        options: ['To classify the data', 'To collect data from the real world', 'To remove noise', 'To calculate probabilities'],
                        correct: 1,
                        explanation: 'A sensor collects the raw information, such as a camera capturing an image.'
                    },
                    {
                        question: 'What is the purpose of Preprocessing?',
                        options: ['To prepare and clean the data', 'To assign the final class', 'To create the training labels', 'To calculate the final accuracy'],
                        correct: 0,
                        explanation: 'Preprocessing can include removing noise, correcting lighting, and generally preparing data for later stages.'
                    },
                    {
                        question: 'What is Feature Extraction?',
                        options: ['Removing the entire dataset', 'Extracting important measurable properties from the data', 'Assigning the final class', 'Splitting the dataset into databases'],
                        correct: 1,
                        explanation: 'Feature Extraction identifies useful characteristics that represent the input, such as length and lightness in the fish example.'
                    },
                    {
                        question: 'What is a Feature?',
                        options: ['A class label', 'A measurable property of an object', 'A complete dataset', 'A prediction algorithm'],
                        correct: 1,
                        explanation: 'A feature is a measurable property, such as length, temperature, color, or lightness.'
                    },
                    {
                        question: 'What is a Feature Vector?',
                        options: ['A list of features describing one object', 'A list of classes', 'A list of algorithms', 'A list of predictions'],
                        correct: 0,
                        explanation: 'For example: x=[58,4.4] can represent a fish with a length of 58 and lightness of 4.4.'
                    },
                    {
                        question: 'In Pattern Recognition, what is a Class?',
                        options: ['A measurable property', 'The label/category assigned to an object', 'A sensor', 'A preprocessing technique'],
                        correct: 1,
                        explanation: 'Examples of classes are Salmon, Sea Bass, Spam, and Not Spam.'
                    },
                    {
                        question: 'What is the difference between training data and test data?',
                        options: ['Training data is used for learning; test data is used for evaluation', 'Training data is always smaller', 'Test data is used to train the model', 'There is no difference'],
                        correct: 0,
                        explanation: 'Training data teaches the model, while test data evaluates how well it performs on unseen examples.'
                    },
                    {
                        question: 'Which of the following is a Statistical Pattern Recognition method?',
                        options: ['Naive Bayes', 'CNN', 'Random Forest', 'k-NN'],
                        correct: 0,
                        explanation: 'Statistical methods are based on probability theory. Examples include Naive Bayes and LDA.'
                    },
                    {
                        question: 'Which method is based on probability theory?',
                        options: ['CNN', 'Random Forest', 'Naive Bayes', 'k-NN'],
                        correct: 2,
                        explanation: 'Naive Bayes uses probability theory and Bayes\' theorem.'
                    },
                    {
                        question: 'What does Bayes\' theorem calculate P(class|data)?',
                        options: ['The probability of a class given observed data', 'The number of features', 'The training accuracy', 'The number of classes'],
                        correct: 0,
                        explanation: 'P(class|data) is the posterior probability  -  the probability of the class after observing the data.'
                    },
                    {
                        question: 'In a spam filter, if P(spam)=0.30, what does this mean?',
                        options: ['30% of spam emails contain the word "spam"', '30% of all emails are spam', '30% of normal emails are spam', 'The classifier has 30% accuracy'],
                        correct: 1,
                        explanation: 'P(spam)=0.30 is the prior probability that an email is spam.'
                    },
                    {
                        question: 'If P(free|spam)=0.60, what does this mean?',
                        options: ['60% of all emails are spam', '60% of normal emails contain "free"', '60% of spam emails contain "free"', 'There is a 60% chance the email is spam'],
                        correct: 2,
                        explanation: 'It means that among spam emails, 60% contain the word free.'
                    },
                    {
                        question: 'In the spam example, what is P(spam|free)?',
                        options: ['30%', '60%', '70%', '83.7%'],
                        correct: 3,
                        explanation: 'P(spam|free) = (0.60(0.30)) / (0.60(0.30)+0.05(0.70)) = 0.837. Therefore, an email containing free has an 83.7% probability of being spam.'
                    },
                    {
                        question: 'Which of the following is a Machine Learning method?',
                        options: ['Naive Bayes', 'SVM', 'LDA', 'Probability theory'],
                        correct: 1,
                        explanation: 'Examples of Machine Learning methods in the lecture include SVM, k-NN, Decision Trees, and Random Forest.'
                    },
                    {
                        question: 'Which of the following is NOT listed as a Machine Learning method?',
                        options: ['SVM', 'k-NN', 'Random Forest', 'Naive Bayes'],
                        correct: 3,
                        explanation: 'Naive Bayes belongs to the Statistical Methods category.'
                    },
                    {
                        question: 'Which technique is particularly useful for learning complex patterns automatically?',
                        options: ['Deep Learning', 'Manual classification', 'Data storage', 'Basic sorting'],
                        correct: 0,
                        explanation: 'Neural Networks and Deep Learning can automatically learn complex patterns without manually designing all features.'
                    },
                    {
                        question: 'CNN is mainly associated with:',
                        options: ['Image recognition', 'Database management', 'Probability calculations', 'Sorting'],
                        correct: 0,
                        explanation: 'Convolutional Neural Networks (CNNs) are especially useful for image-related tasks.'
                    },
                    {
                        question: 'RNNs are especially suitable for:',
                        options: ['Sequences such as text and audio', 'Static images only', 'Database storage', 'Feature scaling'],
                        correct: 0,
                        explanation: 'Recurrent Neural Networks are designed to handle sequential information such as text and audio.'
                    },
                    {
                        question: 'Which learning type uses labeled data?',
                        options: ['Unsupervised learning', 'Supervised learning', 'Reinforcement learning', 'Random learning'],
                        correct: 1,
                        explanation: 'In supervised learning, the training examples have known labels.'
                    },
                    {
                        question: 'Which learning type works without labeled data?',
                        options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Classification'],
                        correct: 1,
                        explanation: 'Unsupervised learning tries to discover hidden structures or patterns without predefined labels.'
                    },
                    {
                        question: 'Which learning type uses both labeled and unlabeled data?',
                        options: ['Supervised', 'Unsupervised', 'Semi-supervised', 'Reinforcement'],
                        correct: 2,
                        explanation: 'Semi-supervised learning combines a smaller labeled dataset with a larger unlabeled dataset.'
                    },
                    {
                        question: 'Reinforcement Learning is mainly based on:',
                        options: ['Labels', 'Rewards and interaction with an environment', 'Feature scaling', 'Bayes\' theorem'],
                        correct: 1,
                        explanation: 'An agent interacts with an environment and learns through rewards and penalties.'
                    },
                    {
                        question: 'In the fish classification example, which features were used?',
                        options: ['Weight and color', 'Length and lightness', 'Temperature and weight', 'Width and speed'],
                        correct: 1,
                        explanation: 'The fish were represented using Length and Lightness.'
                    },
                    {
                        question: 'What is the feature vector of the new fish?',
                        options: ['[48, 3.1]', '[58, 4.4]', '[60, 5.0]', '[66, 6.5]'],
                        correct: 2,
                        explanation: 'The new fish is represented as: (60,5.0)'
                    },
                    {
                        question: 'What value of k was used in the main k-NN fish example?',
                        options: ['1', '2', '3', '5'],
                        correct: 2,
                        explanation: 'The example uses k = 3, meaning the three nearest training samples are considered.'
                    },
                    {
                        question: 'What distance measure was used in the k-NN example?',
                        options: ['Manhattan distance', 'Euclidean distance', 'Hamming distance', 'Cosine similarity'],
                        correct: 1,
                        explanation: 'd = sqrt((delta length)^2 + (delta lightness)^2). This is the Euclidean distance.'
                    },
                    {
                        question: 'Why was feature scaling used before calculating the distances?',
                        options: ['To delete the features', 'To put features on a comparable scale', 'To increase the number of classes', 'To remove the test set'],
                        correct: 1,
                        explanation: 'Scaling prevents one feature with a larger numerical range from dominating the distance calculation.'
                    },
                    {
                        question: 'In the k = 3 fish example, the nearest three fish were:',
                        options: ['Salmon, Salmon, Salmon', 'Salmon, Sea Bass, Sea Bass', 'Sea Bass, Sea Bass, Sea Bass', 'Salmon, Salmon, Sea Bass'],
                        correct: 1,
                        explanation: 'The three nearest neighbors included one Salmon and two Sea Bass.'
                    },
                    {
                        question: 'What was the final prediction for the new fish?',
                        options: ['Salmon', 'Sea Bass', 'Unknown', 'Both'],
                        correct: 1,
                        explanation: 'Sea Bass received 2 out of 3 votes, so it was selected.'
                    },
                    {
                        question: 'What happens in the lecture when k=1?',
                        options: ['The prediction becomes Salmon', 'The prediction becomes Sea Bass', 'No prediction is possible', 'Both classes are selected'],
                        correct: 0,
                        explanation: 'With k=1, only the closest neighbor is considered, and in the example that leads to Salmon.'
                    },
                    {
                        question: 'What does the fish example demonstrate?',
                        options: ['The choice of k can affect the prediction', 'k-NN always gives the same answer', 'Feature selection is unnecessary', 'Classification does not depend on training data'],
                        correct: 0,
                        explanation: 'The example shows that changing k can change the classification result.'
                    },
                    {
                        question: 'An 8x8 grayscale digit image contains how many pixels?',
                        options: ['8', '16', '64', '128'],
                        correct: 2,
                        explanation: '8x8=64. Therefore, the image can be represented by 64 numerical values.'
                    },
                    {
                        question: 'In the digit example, how many classes are there?',
                        options: ['2', '8', '9', '10'],
                        correct: 3,
                        explanation: 'The classes correspond to digits 0 through 9, giving 10 classes.'
                    },
                    {
                        question: 'How many images were used in the digit dataset?',
                        options: ['360', '1,437', '1,797', '2,000'],
                        correct: 2,
                        explanation: 'The dataset contains 1,797 images.'
                    },
                    {
                        question: 'How many images were used for training?',
                        options: ['360', '1,437', '1,797', '897'],
                        correct: 1,
                        explanation: 'The lecture uses an 80/20 split: Training = 1,437, Testing = 360'
                    },
                    {
                        question: 'Which method achieved the highest accuracy in the digit experiment?',
                        options: ['k-NN', 'Neural Network', 'SVM', 'Naive Bayes'],
                        correct: 2,
                        explanation: 'SVM achieved 99.4%, the highest accuracy among the methods tested.'
                    },
                    {
                        question: 'Which method achieved the lowest accuracy?',
                        options: ['SVM', 'k-NN', 'Random Forest', 'Naive Bayes'],
                        correct: 3,
                        explanation: 'Naive Bayes achieved 81.1%.'
                    },
                    {
                        question: 'What does a confusion matrix show?',
                        options: ['Only training time', 'True classes versus predicted classes', 'Only the number of features', 'Only the model architecture'],
                        correct: 1,
                        explanation: 'A confusion matrix shows which classes were predicted correctly and which were confused with others.'
                    },
                    {
                        question: 'In a confusion matrix, what does the diagonal usually represent?',
                        options: ['Incorrect predictions', 'Correct predictions', 'Missing data', 'Training data'],
                        correct: 1,
                        explanation: 'The diagonal represents cases where the predicted class matches the true class.'
                    },
                    {
                        question: 'Which of the following is a challenge in Pattern Recognition?',
                        options: ['Noise', 'Bias', 'Overfitting', 'All of the above'],
                        correct: 3,
                        explanation: 'The lecture identifies noisy data, data bias, overfitting, explainability, adversarial attacks, and limited labeled data as challenges.'
                    },
                    {
                        question: 'What is overfitting?',
                        options: ['The model learns general patterns very well', 'The model memorizes training data and performs poorly on new data', 'The model has no training data', 'The model removes all features'],
                        correct: 1,
                        explanation: 'An overfitted model performs well on training data but fails to generalize to unseen data.'
                    },
                    {
                        question: 'What is a major issue with some Deep Learning models?',
                        options: ['They cannot learn patterns', 'They may be difficult to explain', 'They cannot process images', 'They always have low accuracy'],
                        correct: 1,
                        explanation: 'Deep models can behave like black boxes, making their decisions difficult to explain.'
                    },
                    {
                        question: 'What is the main goal of the research (PART 2)?',
                        options: ['Detect cancer from X-rays', 'Predict sepsis early using clinical data', 'Classify handwritten digits', 'Predict stock prices'],
                        correct: 1,
                        explanation: 'The research aims to use routine patient information such as vital signs and laboratory results to predict Sepsis early, before the patient\'s condition worsens.'
                    },
                    {
                        question: 'What does "Ensemble Learning" mean?',
                        options: ['Using only one model', 'Combining multiple machine learning models', 'Removing all features', 'Using only neural networks'],
                        correct: 1,
                        explanation: 'Ensemble Learning combines multiple models to produce a stronger final prediction than relying on a single model.'
                    },
                    {
                        question: 'What does WOA stand for?',
                        options: ['Weighted Optimization Algorithm', 'Whale Optimization Algorithm', 'Wide Optimization Algorithm', 'Wave Optimization Algorithm'],
                        correct: 1,
                        explanation: 'WOA stands for Whale Optimization Algorithm.'
                    },
                    {
                        question: 'What is the main role of WOA in this research?',
                        options: ['Predict sepsis directly', 'Select important clinical features', 'Explain the model', 'Generate patient data'],
                        correct: 1,
                        explanation: 'WOA is used for Feature Selection  -  finding a smaller and useful subset of the original features.'
                    },
                    {
                        question: 'How many original features were available?',
                        options: ['10', '13', '25', '50'],
                        correct: 2,
                        explanation: 'The research started with 25 clinical features.'
                    },
                    {
                        question: 'How many features were selected by WOA?',
                        options: ['5', '12', '13', '25'],
                        correct: 2,
                        explanation: 'WOA selected 13 features from the original 25.'
                    },
                    {
                        question: 'How many features were removed?',
                        options: ['10', '12', '13', '15'],
                        correct: 1,
                        explanation: '25-13=12. So 12 features were removed.'
                    },
                    {
                        question: 'What percentage reduction in the number of features was achieved?',
                        options: ['25%', '40%', '48%', '52%'],
                        correct: 2,
                        explanation: '(25-13)/25x100=48%. So the number of features was reduced by approximately 48%.'
                    },
                    {
                        question: 'Which of the following is a clinical feature mentioned in the research?',
                        options: ['Heart Rate', 'Blood Pressure', 'Temperature', 'All of the above'],
                        correct: 3,
                        explanation: 'Clinical features include Heart Rate, Blood Pressure, Oxygen Saturation, Temperature, Platelets, BUN, and Creatinine, among others.'
                    },
                    {
                        question: 'What does BUN stand for?',
                        options: ['Blood Universal Number', 'Blood Urea Nitrogen', 'Basic Urea Network', 'Blood User Normalization'],
                        correct: 1,
                        explanation: 'BUN means Blood Urea Nitrogen, a laboratory measurement used among the clinical features.'
                    },
                    {
                        question: 'Which three base classifiers were used?',
                        options: ['CNN, RNN, SVM', 'DT, KNN, AdaBoost', 'LDA, Naive Bayes, CNN', 'Random Forest, SVM, CNN'],
                        correct: 1,
                        explanation: 'The three base classifiers are: Decision Tree (DT), K-Nearest Neighbors (KNN), AdaBoost (AB)'
                    },
                    {
                        question: 'What is the basic idea of a Decision Tree?',
                        options: ['Compare distances between samples', 'Build a sequence of decisions leading to a final classification', 'Optimize whale movement', 'Explain predictions using SHAP'],
                        correct: 1,
                        explanation: 'A Decision Tree makes a sequence of decisions until it reaches a final classification.'
                    },
                    {
                        question: 'What is the basic idea of KNN?',
                        options: ['Compare a new sample with nearby training samples', 'Build a decision tree', 'Combine predictions using a meta-learner', 'Select features using whales'],
                        correct: 0,
                        explanation: 'KNN classifies a new sample based on its closest training samples.'
                    },
                    {
                        question: 'What is AdaBoost designed to do?',
                        options: ['Build weak models sequentially while focusing on difficult samples', 'Remove all features', 'Calculate F1-score', 'Explain the model'],
                        correct: 0,
                        explanation: 'AdaBoost is an ensemble technique that builds weak learners sequentially, focusing more on difficult-to-classify examples.'
                    },
                    {
                        question: 'What is the main idea of Ensemble Learning?',
                        options: ['Use only the best single model', 'Combine predictions from multiple models', 'Remove all models', 'Use only labeled data'],
                        correct: 1,
                        explanation: 'Different models may capture different patterns, so combining them can produce a stronger prediction.'
                    },
                    {
                        question: 'What is the difference between Voting and Stacking?',
                        options: ['They are exactly the same', 'Voting directly combines predictions, while Stacking uses a Meta-Learner', 'Voting uses WOA and Stacking does not', 'Stacking uses only one classifier'],
                        correct: 1,
                        explanation: 'In Voting, the predictions from DT, KNN, and AdaBoost are directly combined. In Stacking, their outputs are given to a Meta-Learner, which learns how to combine them.'
                    },
                    {
                        question: 'What is a Meta-Learner?',
                        options: ['A model that learns how to combine the outputs of base models', 'A feature selection algorithm', 'A clinical measurement', 'A type of sensor'],
                        correct: 0,
                        explanation: 'In Stacking, the Meta-Learner receives the predictions of the base classifiers and learns how to produce the final prediction.'
                    },
                    {
                        question: 'Why did the researchers compare WOA with other optimization algorithms?',
                        options: ['To prove WOA is the only possible algorithm', 'To evaluate whether WOA performs well compared with other feature-selection methods', 'To increase the number of features', 'To replace SHAP'],
                        correct: 1,
                        explanation: 'WOA was compared with other metaheuristic optimization methods to evaluate its performance.'
                    },
                    {
                        question: 'Which of the following was used as an alternative optimization algorithm?',
                        options: ['Bat Algorithm (BA)', 'Grey Wolf Optimizer (GWO)', 'Firefly Algorithm (FA)', 'All of the above'],
                        correct: 3,
                        explanation: 'The comparison included BA, GWO, HHO, FPA, and FA, in addition to WOA.'
                    },
                    {
                        question: 'What does SHAP stand for?',
                        options: ['Statistical Health Analysis Prediction', 'SHapley Additive exPlanations', 'Sequential Health Analysis Process', 'Smart Healthcare AI Prediction'],
                        correct: 1,
                        explanation: 'SHAP means SHapley Additive exPlanations.'
                    },
                    {
                        question: 'What is the purpose of SHAP?',
                        options: ['Select the 13 features', 'Explain how features contribute to model decisions', 'Train the KNN model', 'Calculate the number of patients'],
                        correct: 1,
                        explanation: 'SHAP explains why the model made a particular prediction and shows the contribution of individual features.'
                    },
                    {
                        question: 'Which three features had the highest influence according to SHAP?',
                        options: ['Heart Rate, Temperature, Creatinine', 'Platelet Count, BUN, Systolic Blood Pressure', 'Oxygen Saturation, Temperature, Heart Rate', 'Weight, Height, Age'],
                        correct: 1,
                        explanation: 'The three most influential features identified by SHAP were: Platelet Count, BUN, Systolic Blood Pressure'
                    },
                    {
                        question: 'What was the reported accuracy of the WOA-Stacking model?',
                        options: ['81.1%', '90.5%', '97.6%', '99.4%'],
                        correct: 2,
                        explanation: 'The study reports 97.6% Accuracy for the WOA-Stacking model.'
                    },
                    {
                        question: 'If the model is applied to 1,000 cases with 97.6% accuracy, approximately how many predictions are correct?',
                        options: ['24', '760', '976', '997'],
                        correct: 2,
                        explanation: '0.976x1000=976. So about 976 predictions are correct.'
                    },
                    {
                        question: 'What was the reported Sensitivity?',
                        options: ['81.1%', '95.0%', '97.6%', '99.4%'],
                        correct: 2,
                        explanation: 'The reported Sensitivity is 97.6%.'
                    },
                    {
                        question: 'What was the reported F1-score?',
                        options: ['81.1%', '95.0%', '97.6%', '99.4%'],
                        correct: 2,
                        explanation: 'The reported F1-score is 97.6%.'
                    },
                    {
                        question: 'What does Precision measure?',
                        options: ['Of the cases predicted as positive, how many were actually positive', 'Of all actual positive cases, how many were detected', 'The number of features', 'The number of training samples'],
                        correct: 0,
                        explanation: 'Precision measures the proportion of true positives among all predicted positive cases.'
                    },
                    {
                        question: 'What does Recall measure?',
                        options: ['Of the predicted positives, how many were correct', 'Of the actual positive cases, how many were successfully detected', 'The number of features selected', 'The number of incorrect predictions'],
                        correct: 1,
                        explanation: 'Recall (also called Sensitivity) measures the proportion of actual positive cases that are correctly identified.'
                    },
                    {
                        question: 'What is the formula for F1-score?',
                        options: ['F1 = Precision + Recall', 'F1 = Precision x Recall', 'F1 = 2(Precision x Recall) / (Precision + Recall)', 'F1 = Accuracy - Precision'],
                        correct: 2,
                        explanation: 'F1 is the harmonic mean of Precision and Recall: 2(Precision x Recall) / (Precision + Recall)'
                    },
                    {
                        question: 'If Precision = 0.975 and Recall = 0.977, approximately what is the F1-score?',
                        options: ['0.50', '0.876', '0.976', '1.50'],
                        correct: 2,
                        explanation: 'F1 = 2(0.975x0.977)/(0.975+0.977) ~= 0.976'
                    },
                    {
                        question: 'Why is Accuracy alone not always sufficient in a medical problem?',
                        options: ['Accuracy is never useful', 'Medical datasets may have class imbalance, so Precision, Recall, and F1-score are also important', 'Accuracy cannot be calculated', 'Accuracy only works with images'],
                        correct: 1,
                        explanation: 'In medical datasets, the number of sepsis cases may be much smaller than healthy cases, making Accuracy misleading. Precision, Recall, and F1-score provide a more complete picture.'
                    },
                    {
                        question: 'Which statement best describes the complete proposed system?',
                        options: ['25 features -> CNN -> SHAP', 'Clinical data -> WOA feature selection -> Stacking Ensemble -> Sepsis prediction -> SHAP explanation', 'Images -> k-NN -> Random Forest', 'Clinical data -> Naive Bayes only'],
                        correct: 1,
                        explanation: 'The complete system: Clinical data -> WOA selects 13 features -> DT+KNN+AdaBoost -> Stacking Ensemble -> Sepsis prediction -> SHAP explains the prediction'
                    },
                    {
                        question: 'Why is WOA useful before applying the ensemble models?',
                        options: ['It increases the number of features', 'It removes potentially unnecessary features and keeps a smaller useful subset', 'It replaces the classifiers', 'It explains predictions'],
                        correct: 1,
                        explanation: 'WOA reduces the feature set from 25 to 13, removing less useful features while keeping the most informative ones.'
                    },
                    {
                        question: 'Why might Stacking outperform a single classifier?',
                        options: ['It completely eliminates errors', 'Different models can learn different patterns, and the Meta-Learner can combine their outputs', 'It does not require data', 'It always produces 100% accuracy'],
                        correct: 1,
                        explanation: 'Different base classifiers may capture different patterns, and the Meta-Learner can learn how to best combine their predictions.'
                    },
                    {
                        question: 'Which component answers the question: "Which features are most useful?"',
                        options: ['SHAP', 'WOA', 'Meta-Learner', 'Accuracy'],
                        correct: 1,
                        explanation: 'WOA is used for feature selection to identify the most useful subset of features.'
                    },
                    {
                        question: 'Which component answers the question: "Why did the model make this prediction?"',
                        options: ['WOA', 'KNN', 'SHAP', 'Accuracy'],
                        correct: 2,
                        explanation: 'SHAP explains the contribution of each feature to the model\'s prediction.'
                    },
                    {
                        question: 'Which component answers the question: "How can several models be combined into a stronger prediction?"',
                        options: ['Stacking Ensemble', 'WOA', 'SHAP', 'Feature Scaling'],
                        correct: 0,
                        explanation: 'Stacking Ensemble combines multiple base classifiers using a Meta-Learner to produce a stronger prediction.'
                    },
                    {
                        question: 'A model has 97.6% Accuracy. Does this alone prove that it is ready for clinical use?',
                        options: ['Yes', 'No'],
                        correct: 1,
                        explanation: 'No. Clinical readiness requires external validation, independent testing, and consideration of sensitivity, specificity, and other metrics beyond just accuracy.'
                    },
                    {
                        question: 'Which of the following is important for evaluating clinical readiness?',
                        options: ['External validation', 'Independent dataset testing', 'Sensitivity and specificity', 'All of the above'],
                        correct: 3,
                        explanation: 'Clinical readiness requires external validation, independent dataset testing, and good sensitivity and specificity.'
                    },
                    {
                        question: 'Why is preventing Data Leakage important?',
                        options: ['Because leaked information can make model performance look better than it really is', 'Because it increases the number of features', 'Because it replaces SHAP', 'Because it makes KNN unnecessary'],
                        correct: 0,
                        explanation: 'Data leakage leads to overly optimistic performance estimates that do not reflect real-world performance.'
                    },
                    {
                        question: 'Which statement is correct about the two lectures?',
                        options: ['Both only discuss Deep Learning', 'Both demonstrate how data can be transformed into useful predictions', 'Neither discusses classification', 'Both only use Naive Bayes'],
                        correct: 1,
                        explanation: 'Both lectures show how raw data (fish measurements, clinical features) can be transformed into useful predictions using pattern recognition and machine learning.'
                    }
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
        quizzes: []
    },
    {
        id: 'dss',
        name: 'Decision Support System',
        code: 'DSS403',
        icon: 'bar-chart-2',
        description: 'Systems to assist in decision making',
        quizzes: []
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
                id: 'sp-quiz1',
                title: 'quiz-lecture-1',
                questions: [
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
        <h2 style="margin-bottom: 20px; text-align: center;">${currentCourse.name}</h2>
        <div style="display: flex; flex-direction: column; gap: 15px;">
            ${quizzes.map((quiz, index) => `
                <div class="course-card" onclick="startQuiz(${index})" style="cursor: pointer;">
                    <h3>${quiz.title}</h3>
                    <p>${quiz.questions.length} Questions</p>
                </div>
            `).join('')}
            <button class="btn btn-outline" onclick="closeQuizModal()" style="margin-top: 20px;">Close</button>
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
