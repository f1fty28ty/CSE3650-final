# Getting Started

## Run the Docker Container Locally

To build and run the application with Docker:

```bash
docker-compose up --build -d
```

Open http://localhost:3000 in your browser to view the app.

You can start editing the page by modifying app/page.tsx. Changes will auto-update in development mode.

## Kubernetes Deployment

### Setting Up Kubernetes Locally

1.	Install Dependencies:
        •	Docker
        •	Kind (Kubernetes in Docker):

```bash
brew install kind
```


• kubectl:

```bash
brew install kubectl
```


2.	Create a Kind Cluster:
	•	Use the provided kind-conf.yaml:

```bash
kind create cluster --config kubernetes/kind-conf.yaml
```

3.	Build and Load Docker Image:
	•	Build the Docker image locally:

```bash
docker build -t nextjs-app:local .
```

•	Load the image into the Kind cluster:

```bash
kind load docker-image nextjs-app:local --name nextjs-cluster
```

4.	Apply Kubernetes Manifests:
	•	Use the provided manifests in the kubernetes directory:
```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

5.	Access the Application:
	•	The application will be available at http://localhost:30080.

6.	Verify Pods and Services:
•	Check running pods:
```bash
kubectl get pods
```

•	Check the service:
```bash
kubectl get services
```
## Traffic Monitoring with Wireshark

### Setting Up Wireshark

1.	Install Wireshark:
•	On macOS:

```bash
brew install wireshark
```

•	On other platforms, download it from Wireshark’s website.

	
2.	Monitor Traffic:
•	Open Wireshark and select the appropriate network interface:
•	For traffic on localhost, use the lo0 interface (loopback).
•	Apply a capture filter to monitor Kubernetes NodePort traffic:

```plaintext
tcp.port==30080
```

3.	Analyze Traffic:
•	Run a load test using hey:

```bash
hey -z 30s -c 50 http://localhost:30080
```

•	Observe packets in Wireshark to confirm traffic distribution to Kubernetes pods.

4.	Advanced Debugging:
•	Use filters like:

http


•	Follow individual TCP streams:
•	Right-click a packet → Follow → TCP Stream.

Learn More

To learn more about Next.js:
	•	Next.js Documentation - learn about features and API.
	•	Next.js GitHub Repository.

To learn more about Kubernetes:
	•	Kubernetes Documentation.
