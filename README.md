# Stock Broker Platform (Zerodha Clone)

A high-performance, distributed microservice-based stock brokering application built with Node.js, Next.js, gRPC, and GraphQL.

## Architecture & Port Mapping

This project consists of a Next.js client and 8 backend microservices:

| Service | Directory | Port / Protocol | Database / Tech | Purpose |
| --- | --- | --- | --- | --- |
| **Client** | `/client` | `3000` (HTTP) | Next.js, React, Tailwind | Frontend user dashboard and reporting UI |
| **Watchlist Manager** | `/watchlist_mgr_service` | `8085` (HTTP) | MongoDB | Manages user watchlists and stock groups |
| **User Manager** | `/user_mgr_Service` | `8086` (HTTP) | MongoDB | Manages user profiles and portfolio balances |
| **Order Manager** | `/order_mgr_Service` | `8087` (HTTP) | MongoDB | Handles new buy/sell order placement |
| **Market Data Service**| `/market_data_service` | `4000` (HTTP) | OpenSearch, Upstox API | Pulls live/historical feed and index data |
| **Exchange Connector** | `/exchange_connector` | `3000` (HTTP) | Node.js | Interfaces with external exchange endpoints |
| **Stock Exchange Mock** | `/stock_exchange` | `4000` (HTTP) | Node.js | Simulates external exchange order execution |
| **Order History** | `/order_history_service`| `4001` (GraphQL)| GraphQL (Mock Data) | GraphQL endpoint for user order history |
| **Risk Management** | `/rms_service` | `50051` (gRPC)| gRPC | Checks order margin and fund validity |

---

## Setup & Running the Services

### Prerequisites
Before starting, ensure you have the following installed:
1. **Node.js** (v18+ recommended)
2. **MongoDB** (Local or Atlas connection string)
3. **OpenSearch** (or credentials for Aiven index data ingestion)

---

### Step-by-Step Installation

#### 1. Clone the repository
```bash
git clone https://github.com/HarshitRaj21Ratan/stockapp.git
cd stockapp
```

#### 2. Environment Configuration
You need to set up environment variables for the microservices. In their respective folders, create a `.env` file based on the templates below:

##### Watchlist Manager (`/watchlist_mgr_service/.env`)
```env
PORT=8085
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/watchlists
```

##### User Manager (`/user_mgr_Service/.env`)
```env
PORT=8086
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/users
```

##### Order Manager (`/order_mgr_Service/.env`)
```env
PORT=8087
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/orders
```

##### Market Data Service (`/market_data_service/.env`)
```env
PORT=4000
CLIENT_ID=your_upstox_client_id
CLIENT_SECRET=your_upstox_client_secret
REDIRECT_URI=https://localhost:4000
AUTH_CODE=your_upstox_auth_code
ACCESS_TOKEN=your_upstox_access_token
OPENSEARCH_HOST=https://your_aiven_opensearch_host_url
```

##### Stock Exchange (`/stock_exchange/.env`)
```env
PORT=4000
```

##### Exchange Connector (`/exchange_connector/.env`)
```env
PORT=3000
```

##### Next.js Client (`/client/.env`)
```env
NEXT_PUBLIC_WL_BE_URI=http://localhost:8085
NEXT_PUBLIC_AG_URI=http://localhost:8000
```

---

#### 3. Install Dependencies
You can install dependencies for all services at once from the root directory using this command:

**On Windows (PowerShell):**
```powershell
Get-ChildItem -Directory | ForEach-Object {
    Write-Host "Installing dependencies in $_..." -ForegroundColor Green
    cd $_.FullName
    npm install
    cd ..
}
```

**On Linux/macOS:**
```bash
for d in */ ; do
    echo "Installing dependencies in $d..."
    (cd "$d" && npm install)
done
```

---

#### 4. Running the Services
Since the services run independently, you will need to start them. To start a service, run the dev script inside its directory:

##### Start a backend microservice (e.g., Watchlist Manager):
```bash
cd watchlist_mgr_service
npm run devstart
```
*(All backend microservices support `npm run devstart` for live-reload development via nodemon).*

##### Start the Next.js Client:
```bash
cd client
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the client app dashboard.
