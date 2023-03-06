FROM cypress/base:12

# Set the working directory to /app
WORKDIR /app



# Copy the archive to the container and extract it in /app directory
COPY LIO-FX-TP10.zip .
RUN apt-get update && apt-get install -y unzip
RUN unzip LIO-FX-TP10.zip -d /app && rm LIO-FX-TP10.zip

# Install dependencies and run the tests
RUN npm install && npm run e2e