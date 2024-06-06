let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_email')
console.log(displayName);
// if(displayName!=null){
//     form.email.value = displayName
// }



form.addEventListener('submit', async (e) => {
    e.preventDefault();

        let email = e.target.email.value;
        console.log(email);

        // Here we would typically call an API to check the email
        // For demonstration, let's assume a function `checkEmail` that checks if the email exists in DynamoDB
        let emailExists =  await checkEmail(email);

        if (emailExists) {
            // Redirect to the next page if email exists
            window.location = `projects.html?email=${email}`;
        } else {
            // Show an error message if the email does not exist
            alert('Email not found. Please sign up first.');
        }
    });


     async function checkEmail(email) {
        // // Placeholder for actual API call to check email in DynamoDB
        // // Replace with real implementation
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         // Simulate checking email; return true if email exists, false otherwise
        //         resolve(email === 'test@example.com'); // Example condition
        //     }, 1000);
        // });

        console.log(email);
        
        try {
            const response = await fetch(`https://p497lzzlxf.execute-api.us-east-2.amazonaws.com/Phase1/register?email=${email}`);
            console.log(response);
            console.log(response.ok);
            const data = await response.json();
            console.log(data);
            return data.requestId;
        } catch (error) {
            console.error('Error checking email:', error);
            return false;
        }
    }

