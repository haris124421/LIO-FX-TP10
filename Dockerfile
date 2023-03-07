FROM cypress/base:12

# Set the working directory to /app
WORKDIR /app

ENV CYPRESS_BASEURL=$CYPRESS_BASEURL
ENV CYPRESS_USERNAME=$CYPRESS_USERNAME
ENV CYPRESS_PASSWORD=$CYPRESS_PASSWORD
ENV CYPRESS_BUILD=$CYPRESS_BUILD

# Copy source code to /app root
COPY . .

# Install dependencies and run the tests
RUN npm install