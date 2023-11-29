# Set the working directory to the location of your script
setwd("~/Documents/BI2")

# Read CSV file
government_procurement <- read.csv("government-procurement-via-gebiz.csv")

# Display basic information about the dataset
str(government_procurement)

# Feature Selection
selected_columns <- c("ProcurementAmount", "Supplier", "ProcurementCategory")
selected_data <- government_procurement[selected_columns]

# Check for missing values
missing_values <- colSums(is.na(selected_data))

# Handle missing values (if needed)
selected_data <- na.omit(selected_data)




# Implement dimensionality reduction (e.g., using PCA)
pca_result <- prcomp(selected_data, center = TRUE, scale = TRUE)

# Assuming 'Category' is the target variable, and other columns are features
features <- select(selected_data, -ProcurementCategory)
target <- selected_data$ProcurementCategory

# Split the data into training and testing sets
set.seed(123)  # For reproducibility
split_index <- createDataPartition(target, p = 0.8, list = FALSE)
train_data <- selected_data[split_index, ]
test_data <- selected_data[-split_index, ]

# Install and load the 'caret' package if not already installed
if (!requireNamespace("caret", quietly = TRUE)) {
  install.packages("caret")
}
library(caret)

# Define the control parameters for model evaluation
ctrl <- trainControl(method = "cv", number = 5)

# Evaluate multiple algorithms
algorithms <- c("glm", "rf", "knn")  # Add more algorithms as needed
results <- resamples(train(features, target), models = algorithms, control = ctrl)

# Compare algorithm performance
summary(results)

# Assuming 'rf' is the best-performing algorithm based on the results
best_model <- train(features, target, method = "rf")

# Perform algorithm tuning and ensemble methods if needed
# (This step might involve further exploration and tuning based on your specific requirements)

