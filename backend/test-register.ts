const TEST_PAYLOAD = {
  email: "peterstephen22000@gmail.com", // ⚠️ Replace with a real test email
  password: "lwsi nhcq nhrv jzho",    // ⚠️ Replace with your 16-character Google App Password
  contractAddress: "CD5GUSMCFBM7ROX5HG77TTC7A7LJVILDP6JGS2WNOVOOIR5WRN2GEJKT"
};

async function runTest() {
  console.log("Sending test registration to BEShield API...");
  
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_PAYLOAD),
    });

    const data = await response.json();
    console.log("Response from Server:", data);
  } catch (error) {
    console.error("Failed to connect to your local server:", error);
  }
}

runTest();