// Përdorim URL-në e prodhimit si vlerë standarde për të lehtësuar deploy-in
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://school-queue-management-jhi3.onrender.com';

export default API_BASE_URL;
