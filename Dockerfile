# Use the official Node.js image as the base image 
FROM node:18 AS builder 
# Set the working directory 
WORKDIR /app 
# Copy package.json and package-lock.json for dependency installation 
COPY package*.json ./ 
# Install dependencies 
RUN npm install 
# Copy the rest of the application files 
COPY . . 
# Build the Next.js application 
RUN npm run build 
# Production image 
FROM node:18 AS production 
# Set the working directory 
WORKDIR /app 
# Copy only the necessary files from the builder stage 
COPY --from=builder /app/package*.json ./ COPY --from=builder /app/public ./public COPY --from=builder /app/.next ./.next COPY --from=builder /app/node_modules ./node_modules 
# Install only production dependencies 
RUN npm ci --only=production 
# Expose the port the app runs on 
EXPOSE 3000 
# Start the Next.js application 
CMD ["npm", "start"]