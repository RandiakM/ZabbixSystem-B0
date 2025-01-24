zabbix-deploy-app/
│
├── backend/
│   ├── user-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── aws-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── terraform-service/
│   │   ├── src/
│   │   │   ├── scripts/            # Terraform scripts
│   │   │   ├── services/           # Service to execute Terraform commands
│   │   │   └── index.js            # Entry point for the Terraform service
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   └── docker-compose.yml          # Docker Compose file to orchestrate all services
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AwsKeyInput.js      # Component for AWS key input
│   │   │   ├── Navbar.js           # Navigation bar component
│   │   │   ├── TerraformForm.js    # Component for Terraform input
│   │   ├── pages/
│   │   │   ├── Dashboard.js        # Dashboard page
│   │   │   ├── Login.js            # Login page
│   │   │   ├── Register.js         # Registration page
│   │   │   ├── Settings.js         # User settings page
│   │   ├── services/
│   │   │   ├── api.js              # API service calls
│   │   ├── App.js                  # Main application component
│   │   ├── index.js                # Entry point for the React app
│   │   └── App.css                 # Global styles
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── terraform/                      # Terraform configuration files
│   ├── main.tf                     # Main Terraform configuration
│   ├── variables.tf                # Input variables
│   ├── outputs.tf                  # Output values
│   └── terraform.tfvars            # Default variable values (optional)
│
├── database/
│   ├── migrations/
│   ├── models/
│   ├── seeders/
│   ├── Dockerfile
│   └── init.sql
│
└── README.md                       # Project documentation