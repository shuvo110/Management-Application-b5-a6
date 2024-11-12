const form = document.getElementById("form");
const htmlShowBox = document.getElementById("showBox");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // ইনপুটের ভ্যালু গুলো সংগ্রহ করা
    const employee = e.target.employee;
    const employeeValue = employee.value;
    const position = e.target.position;
    const positionValue = position.value;
    const contact = e.target.contact;
    const contactValue = contact.value;
    // ইনপুট ফাইলটি নির্বাচন করা
    const fileInput = e.target.image;
    const file = fileInput.files[0]; // প্রথম ফাইলটি নেওয়া
    // ফাইল রিডার ব্যবহার করে ইমেজটি নিয়ে আসা
    const reader = new FileReader();
    // ফাইল রিডিং শেষে ইভেন্ট
    reader.onload = function(e) {  //FileReader তৈরি করে reader.onload ইভেন্টে ইমেজের সোর্স URL সেট করা হয়।
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
           <div class="card shadow-xl py-5 rounded-md px-6 border text-center">
                <!-- ছবিটি দেখানো -->
                <img src="${e.target.result}" alt="Employee Image" class="w-32 h-32 mx-auto rounded-full mb-4"> <!--এরপর এই URL (e.target.result) img ট্যাগের src হিসেবে ব্যবহার করা হয়, যাতে ছবিটি দেখা যায়। -->
                <h1 class="text-4xl font-bold">${employeeValue}</h1>
                <p class="my-5 text-slate-500 text-lg">Position : ${positionValue}</p>
                <button onclick="showBtn(this)" class="text-lg bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-red-500 hover:text-black">View Profile</button>
                <div class="hidden mt-6 bg-slate-200 p-6 rounded-md">
                    <p>Contact : </p>
                    <span>${contactValue}</span>
                </div>
            </div>
        `;
        htmlShowBox.appendChild(newDiv); // HTML এ ডিভ যুক্ত করা
    };
    // ফাইলটি URL আকারে রিড করা
    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file.");
    }
    // ইনপুট বক্স ফাকা করবে 
    e.target.employee.value = "";
    e.target.position.value = "";
    e.target.contact.value = "";
    e.target.image.value = "";


});
// View Profile বোতাম ক্লিক ইভেন্ট হ্যান্ডলার
function showBtn(button) {
    const hiddenDiv = button.nextElementSibling; 
    if (hiddenDiv.classList.contains("hidden")) { 
        hiddenDiv.classList.remove("hidden"); 
    } else {
        hiddenDiv.classList.add("hidden"); 
    }
}
