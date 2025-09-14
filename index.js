const app = document.getElementById("app");

  const services = [
  { name: "General Checkup", img: "https://plus.unsplash.com/premium_photo-1752073513294-249017810c02?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Dental Care", img: "https://plus.unsplash.com/premium_photo-1667511034915-3fb9af8927ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlbnRhbCUyMGNhcmUlMjBmb3IlMjBoZWxhdGhjYXJlfGVufDB8fDB8fHww" },
  { name: "Cardiology", img: "https://media.istockphoto.com/id/1443050107/photo/man-with-heart-problems-on-the-visit-to-doctor.webp?a=1&b=1&s=612x612&w=0&k=20&c=NQZsdlBExACWfzD5UFhD51ZPvP7aAl0CBUSYU1jtpTw=" },
  { name: "Physiotherapy", img: "https://images.unsplash.com/photo-1650044252595-cacd425982ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoeXNpb3RoZWFyYXBoeXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Eye Care", img: "https://media.istockphoto.com/id/483852540/photo/mature-eye-specialist-examining-a-young-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=vbjrF7EvBRnMjXqKGbEfD9XSvCMAyb6lEwB0IMxPW_c=" },
  { name: "Orthopedic Care", img: "https://media.istockphoto.com/id/1220958078/photo/doctor-and-patient-doctor-examining-of-the-leg-from-the-knee-and-ankle-and-training-broken.webp?a=1&b=1&s=612x612&w=0&k=20&c=fx6TEjVXhp4Tm7ZveX98p1KAKi0wvBWvYfe9Dk32irA=" },
  { name: "Neurology", img: "https://media.istockphoto.com/id/2217974419/photo/asian-elderly-meet-neurologist.jpg?s=1024x1024&w=is&k=20&c=h3r5FvScKcuXzA0QmuAhT-5NAkv_B1AnX4Dq1znB6MI=" },
  { name: "Pediatrics", img: "https://plus.unsplash.com/premium_photo-1666299797563-1d4283fa93a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVkaWF0cmljc3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Dermatology", img: "https://media.istockphoto.com/id/691648536/photo/dermatologist-inspecting-patient-face-skin-with-dermatoscope.webp?a=1&b=1&s=612x612&w=0&k=20&c=nLVFsq6pyJbS8ltQH9t72xhL7xTSA1t84DI8hwioIt4=" },
  { name: "Emergency Care", img: "https://plus.unsplash.com/premium_photo-1664476541563-ab0ea7020026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1lcmdlbmN5JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Mental Health", img: "https://images.unsplash.com/photo-1523495338267-31cbca7759e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Nutrition & Diet", img:"https://media.istockphoto.com/id/2174258106/photo/man-drinking-water.jpg?s=1024x1024&w=is&k=20&c=drbVnOwwF56Notq6pll7_hiFdvfkFztEijcyEjlv_bE="},
  { name: "ENT (Ear, Nose, Throat)", img:"https://media.istockphoto.com/id/649286422/photo/happy-little-boy-having-ear-exam.webp?a=1&b=1&s=612x612&w=0&k=20&c=oFFjx78OvcRtyQiMy-G6GcYkp1yieHMOhhBicAyJnwA=" },
  { name: "Psychiatry", img: "https://media.istockphoto.com/id/1471886655/photo/unrecognizable-female-client-listens-as-female-counselor-gives-advice.webp?a=1&b=1&s=612x612&w=0&k=20&c=dKdDKxJRuvWzyU0H7Ce_VJcQERg11Psj5lJ2Ket-kN4=" },
  { name: "Radiology (X-ray & Scan)", img: "https://plus.unsplash.com/premium_photo-1664302322745-7337f0902e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Oncology", img: "https://media.istockphoto.com/id/2160715346/photo/modern-medical-research-center-anonymous-doctor-pointing-at-desktop-computer-monitor-with-ct.webp?a=1&b=1&s=612x612&w=0&k=20&c=mtCAW3RnI89j8-ji4ShhPUmvOrs22uPhSUEVb18XFpA=" },
  { name: "Urology", img: "https://media.istockphoto.com/id/1171778559/photo/a-medical-worker-shows-the-urinary-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=vAs-ENsBW4kgGtCcvfgoQ3_CtNSUD9vxRsa4UCIvxJU=" },
  { name: "Nephrology", img: "https://plus.unsplash.com/premium_photo-1664475545554-9d9ef5e8fbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5lcGhyb2xvZ3l8ZW58MHx8MHx8fDA%3D" },
  { name: "Gynecology", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGd5bmVjb2xvZ3l8ZW58MHx8MHx8fDA%3D" },
  { name: "Maternity Care", img: "https://media.istockphoto.com/id/1472653540/photo/pregnant-african-american-woman-visiting-doctor-gynecologist.webp?s=1024x1024&w=is&k=20&c=LVmt2rAk5D2uf63gZFAS5iRtPray_MQq-lU1ssEvrWE=" },
  { name: "Vaccinations", img: "https://media.istockphoto.com/id/1308661662/photo/doctor-vaccinating-little-girl-close-up.jpg?s=1024x1024&w=is&k=20&c=Ih0u8fuDlvEhWJ1_EQ0Xa9WvwXbS_qUepgJoaDxQT30=" },
  { name: "Blood Bank", img: "https://media.istockphoto.com/id/1266746911/photo/patient-lying-at-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=UjqFcSA73JLPgrTF8HiJcMNM8X15QwoltUi1GVKNgWg=" },
  { name: "ICU & Critical Care", img: "https://media.istockphoto.com/id/1320942720/photo/doctor-hazmat-or-protective-suit-helping-to-wear-ventilation-oxygen-mask-to-covid-infected.webp?a=1&b=1&s=612x612&w=0&k=20&c=0OTcmFQEBxjRsPxy9eH142oRZ-3iXkKXTgnIo-hsH-s=" },
  { name: "Home Care Services", img: "https://media.istockphoto.com/id/1178536673/photo/senior-healthcare-house-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=U0G-m_XTJj22TLi73YVo8r8XeRAMJSuvvmM4lVqCzYI=" }
];

const doctors = [
  { name: "Dr. Priya Sharma", specialty: "General Physician", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Rajesh Kumar", specialty: "Cardiologist", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Dr. Meena Iyer", specialty: "Dentist", img: "https://randomuser.me/api/portraits/women/40.jpg" },
  { name: "Dr. Suresh Nair", specialty: "Orthopedic Surgeon", img: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Dr. Kavitha Rao", specialty: "Pediatrician", img: "https://randomuser.me/api/portraits/women/41.jpg" },
  { name: "Dr. Ajay Verma", specialty: "Neurologist", img: "https://randomuser.me/api/portraits/men/43.jpg" },
  { name: "Dr. Sneha Menon", specialty: "Dermatologist", img: "https://randomuser.me/api/portraits/women/47.jpg" },
  { name: "Dr. Arvind Joshi", specialty: "Radiologist", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Dr. Latha Krishnan", specialty: "Gynecologist", img: "https://randomuser.me/api/portraits/women/48.jpg" },
  { name: "Dr. Manoj Bhatia", specialty: "Psychiatrist", img: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Dr. Shalini Desai", specialty: "ENT Specialist", img: "https://randomuser.me/api/portraits/women/49.jpg" },
  { name: "Dr. Nikhil Reddy", specialty: "Urologist", img: "https://randomuser.me/api/portraits/men/53.jpg" },
  { name: "Dr. Anjali Kapoor", specialty: "Nutritionist", img: "https://randomuser.me/api/portraits/women/50.jpg" },
  { name: "Dr. Vivek Mehra", specialty: "Oncologist", img: "https://randomuser.me/api/portraits/men/54.jpg" },
  { name: "Dr. Divya Sharma", specialty: "Physiotherapist", img: "https://randomuser.me/api/portraits/women/52.jpg" },
  { name: "Dr. Harish Gupta", specialty: "Nephrologist", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Dr. Ritu Agarwal", specialty: "Emergency Medicine", img: "https://randomuser.me/api/portraits/women/53.jpg" },
  { name: "Dr. Sameer Malhotra", specialty: "Critical Care Specialist", img: "https://randomuser.me/api/portraits/men/56.jpg" },
  { name: "Dr. Pooja Jain", specialty: "Psychologist", img: "https://randomuser.me/api/portraits/women/54.jpg" },
  { name: "Dr. Abhinav Sen", specialty: "Home Care Specialist", img: "https://randomuser.me/api/portraits/men/57.jpg" },
  { name: "Dr. Isha Reddy", specialty: "Vaccination Specialist", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Dr. Rohit Khanna", specialty: "Blood Bank Officer", img: "https://randomuser.me/api/portraits/men/58.jpg" }
];


// Navigation
function renderNav() {
  return `
    <nav>
      <button onclick="renderHome()">Home</button>
      <button onclick="renderServices()">Services</button>
      <button onclick="renderDoctors()">Doctors</button>
      <button onclick="renderAppointment()">Book Appointment</button>
      <button onclick="renderContact()">Contact</button>
    </nav>
  `;
}


function renderHome() {
  app.innerHTML = `
    ${renderNav()}
    <section class="hero">
      <div class="hero-text">
        <h1>Healthy Life Hospital</h1>
        <p>Your trusted partner in health and wellness.<br>
        Expert doctors, world-class facilities, and 24x7 emergency care.</p>
        <button class="cta" onclick="renderAppointment()">Book Appointment</button>
      </div>
    </section>

    <section class="quick-services">
      <h2 style="text-align:center;color:#0077b6;">Our Key Services</h2>
      <div class="grid">
        ${services.slice(0, 4).map(s => `
          <div class="card">
            <img src="${s.img}" alt="${s.name}">
            <h3>${s.name}</h3>
          </div>
        `).join("")}
      </div>
      <div style="text-align:center;">
        <button class="action" onclick="renderServices()">View All Services</button>
      </div>
    </section>
  `;
}

// Services Page
function renderServices() {
  app.innerHTML = `
    ${renderNav()}
    <h2 style="text-align:center;color:#0077b6;">Our Services</h2>
    <div class="grid">
      ${services.map(s => `
        <div class="card">
          <img src="${s.img}" alt="${s.name}">
          <h3>${s.name}</h3>
        </div>
      `).join("")}
    </div>
  `;
}

// Doctors Page
function renderDoctors() {
  app.innerHTML = `
    ${renderNav()}
    <h2 style="text-align:center;color:#0077b6;">Our Doctors</h2>
    <div class="grid">
      ${doctors.map(d => `
        <div class="card">
          <img src="${d.img}" alt="${d.name}">
          <h3>${d.name}</h3>
          <p>${d.specialty}</p>
        </div>
      `).join("")}
    </div>
  `;
}

// Appointment Page
function renderAppointment() {
  app.innerHTML = `
    ${renderNav()}
    <h2 style="text-align:center;color:#0077b6;">Book an Appointment</h2>
    <div class="form-container">
      <input type="text" id="name" placeholder="Your Name">
      <input type="text" id="phone" placeholder="Phone Number">
      <select id="service">
        <option value="">Select Service</option>
        ${services.map(s => `<option>${s.name}</option>`).join("")}
      </select>
      <input type="date" id="date">
      <button class="action" onclick="submitAppointment()">Submit</button>
    </div>
  `;
}

// Contact Page
function renderContact() {
  app.innerHTML = `
    ${renderNav()}
    <h2 style="text-align:center;color:#0077b6;">Contact Us</h2>
    <div class="form-container">
      <p>📍 123 Main Road, Nehru street,Chennai </p>
      <p>📞 +91 98765 43210</p>
      <p>✉️ hello@healthylife.com</p>
    </div>
  `;
}

// Appointment Submit
function submitAppointment() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (!name || !phone || !service || !date) {
    alert("Please fill all fields");
    return;
  }

  app.innerHTML = `
    ${renderNav()}
    <h2 style="text-align:center;color:#0077b6;">✅ Appointment Confirmed</h2>
    <p style="text-align:center;">Thank you, <b>${name}</b>! Your appointment for <b>${service}</b> is booked on <b>${date}</b>.</p>
  `;
}

// Load Home by default
renderHome();
