// Teste de conexão com o Firestore usando Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA33fRSo7jBHFh2rpeQkM4yolbNKvKGWBU",
    authDomain: "redfootlabs.firebaseapp.com",
    projectId: "redfootlabs",
    storageBucket: "redfootlabs.appspot.com",
    messagingSenderId: "179051653983",
    appId: "1:179051653983:web:8eef56e325e4413c398d2a",
    measurementId: "G-J8RN9ZH2WV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para criar usuário
async function createUser(userId, userData) {
    await setDoc(doc(db, "users", userId), userData);
    console.log(`User ${userId} criado.`);
}

// Função para criar empresa
async function createCompany(companyId, companyData) {
    await setDoc(doc(db, "companies", companyId), companyData);
    console.log(`Company ${companyId} criada.`);
}

// Função para criar produto
async function createProduct(productId, productData) {
    await setDoc(doc(db, "products", productId), productData);
    console.log(`Product ${productId} criado.`);
}

// Função para criar projeto
async function createProject(projectId, projectData) {
    await setDoc(doc(db, "projects", projectId), projectData);
    console.log(`Project ${projectId} criado.`);
}

// Função para criar entregável
async function createDeliverable(deliverableId, deliverableData) {
    await setDoc(doc(db, "deliverables", deliverableId), deliverableData);
    console.log(`Deliverable ${deliverableId} criado.`);
}

// Execução sequencial
async function setupFirestore() {
    try {
        await createCompany("company_abc", {
            company_name: "Red Foot Labs"
        });

        await createUser("user_123", {
            username: "Guilherme Storti",
            user_mail: "guilhermenstorti@gmail.com",
            user_phone: "+5544999905592",
            company_id: "company_abc", // referência para companies
            profile_picture: "url_da_imagem_aqui"
        });

        await createProduct("product_xyz", {
            product_name: "App Financeiro",
            product_description: "Aplicativo para controle financeiro pessoal"
        });

        await createProject("project_789", {
            user_id: "user_123", // referência para users
            start_date: "2025-06-01",
            end_date: "2025-12-31"
        });

        await createDeliverable("delivery_001", {
            product_id: "product_xyz",
            project_id: "project_789",
            estimated_time: 40, // horas estimadas
            time_spent: 10,
            started_date: "2025-06-05",
            finished_date: null,
            estimated_starting_date: "2025-06-01",
            estimated_end_date: "2025-06-30",
            deliverable_description: "MVP da funcionalidade X"
        });

        console.log("🔥 Setup Firestore finalizado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao configurar Firestore:", error);
    }
}

// Rodar a configuração
await setupFirestore();
