# Cloud File Upload System

This project provisions three Azure VMs for a file upload system:

- **Frontend VM**: Node.js app serving a React frontend for file upload. Forwards uploads to the BFF service.
- **BFF VM**: Node.js app that receives files, stores them in Azure Blob Storage, and logs uploads to a MariaDB database.
- **DB VM**: MariaDB instance for storing upload metadata.

## Directory Structure

- `cloud-init-frontend.yaml` — Cloud-init for the frontend VM
- `cloud-init-bff.yaml` — Cloud-init for the BFF VM
- `cloud-init-db.yaml` — Cloud-init for the DB VM
- `frontend-app/` — Node.js + React frontend app

## Deployment

1. **Provision VMs** using the provided cloud-init files.
2. **Set environment variables** as needed (e.g., `BFF_URL`, `BLOB_CONNECTION_STRING`, `DB_IP`).
3. **Deploy the frontend-app** to Azure App Service or run on the VM.
4. **Configure the BFF app** with the correct Blob Storage and DB connection strings.

## Environment Variables

- `BFF_URL`: URL of the BFF service (e.g., `http://<BFF_VM_IP>:3000`)
- `BLOB_CONNECTION_STRING`: Azure Blob Storage connection string
- `DB_IP`: IP address of the MariaDB VM

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
