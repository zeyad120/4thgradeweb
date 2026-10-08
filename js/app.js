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
                title: 'Questions on Lecture 1,2 (PART 1 — Pattern Recognition & AI)',
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
                        options: ['Decision → Data → Pattern', 'Data → Pattern → Decision', 'Pattern → Data → Decision', 'Decision → Pattern → Data'],
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
                        options: ['Classification → Sensor → Preprocessing → Feature Extraction', 'Sensor → Preprocessing → Feature Extraction → Classification', 'Feature Extraction → Sensor → Classification → Preprocessing', 'Sensor → Classification → Preprocessing → Feature Extraction'],
                        correct: 1,
                        explanation: 'The four stages are: Sensor → Preprocessing → Feature Extraction → Classification.'
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
                        explanation: 'P(class|data) is the posterior probability — the probability of the class after observing the data.'
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
                        explanation: 'd = sqrt((Δ length)^2 + (Δ lightness)^2). This is the Euclidean distance.'
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
                        question: 'An 8×8 grayscale digit image contains how many pixels?',
                        options: ['8', '16', '64', '128'],
                        correct: 2,
                        explanation: '8×8=64. Therefore, the image can be represented by 64 numerical values.'
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
                        explanation: 'WOA is used for Feature Selection — finding a smaller and useful subset of the original features.'
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
                        explanation: '(25-13)/25×100=48%. So the number of features was reduced by approximately 48%.'
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
                        explanation: '0.976×1000=976. So about 976 predictions are correct.'
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
                        options: ['F1 = Precision + Recall', 'F1 = Precision × Recall', 'F1 = 2(Precision × Recall) / (Precision + Recall)', 'F1 = Accuracy - Precision'],
                        correct: 2,
                        explanation: 'F1 is the harmonic mean of Precision and Recall: 2(Precision × Recall) / (Precision + Recall)'
                    },
                    {
                        question: 'If Precision = 0.975 and Recall = 0.977, approximately what is the F1-score?',
                        options: ['0.50', '0.876', '0.976', '1.50'],
                        correct: 2,
                        explanation: 'F1 = 2(0.975×0.977)/(0.975+0.977) ≈ 0.976'
                    },
                    {
                        question: 'Why is Accuracy alone not always sufficient in a medical problem?',
                        options: ['Accuracy is never useful', 'Medical datasets may have class imbalance, so Precision, Recall, and F1-score are also important', 'Accuracy cannot be calculated', 'Accuracy only works with images'],
                        correct: 1,
                        explanation: 'In medical datasets, the number of sepsis cases may be much smaller than healthy cases, making Accuracy misleading. Precision, Recall, and F1-score provide a more complete picture.'
                    },
                    {
                        question: 'Which statement best describes the complete proposed system?',
                        options: ['25 features → CNN → SHAP', 'Clinical data → WOA feature selection → Stacking Ensemble → Sepsis prediction → SHAP explanation', 'Images → k-NN → Random Forest', 'Clinical data → Naive Bayes only'],
                        correct: 1,
                        explanation: 'The complete system: Clinical data → WOA selects 13 features → DT+KNN+AdaBoost → Stacking Ensemble → Sepsis prediction → SHAP explains the prediction'
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
        quizzes: []
    },
    {
        id: 'sp',
        name: 'Smartphone',
        code: 'SP405',
        icon: 'smartphone',
        description: 'Mobile application development',
        quizzes: []
    },
    {
        id: 'sd',
        name: 'System Design',
        code: 'SD406',
        icon: 'layout',
        description: 'Design and building software systems',
        quizzes: []
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
            <button class="btn-return" onclick="returnToCourseList()" style="margin-top: 20px; width: 100%;">← Return to Courses</button>
        </div>
        <div class="quiz-main">
            <button class="close-modal" onclick="closeQuizModal()" style="position: absolute; top: 15px; right: 15px; z-index: 10;">×</button>
            <div class="quiz-header">
                <h2>${currentQuiz.title}</h2>
                <span class="quiz-progress" id="quiz-progress">Question 1 of ${currentQuiz.questions.length}</span>
            </div>
            <div id="question-container"></div>
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
