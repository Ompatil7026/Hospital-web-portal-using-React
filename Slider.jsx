import Slider from 'react-slick';
import './Slider.css'


document.addEventListener("DOMContentLoaded", function() {
    // Data for doctors
    const doctorsData = [
    
      { 
        name: "Dr. John ADoe",
        specialty: "Cardiologist",
        photoURL: "https://media.istockphoto.com/id/1498146800/photo/portrait-of-a-cheerful-senior-doctor-typing-on-a-laptop-sitting-at-the-office.jpg?s=1024x1024&w=is&k=20&c=W6vdSpKaT3U3TWmMGyooVzcewAEX8BcZ1q3Cd1s25Aw=",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet turpis quis metus vestibulum suscipit."
      },
      { 
        name: "Dr. Jenny Smith",
        specialty: "Pediatrician",
        photoURL: "https://media.istockphoto.com/id/1387256521/photo/shot-of-a-young-female-doctor-standing-with-her-arms-crossed-in-her-office-at-a-hospital.jpg?s=1024x1024&w=is&k=20&c=QliROa68-Rb7vYJ79KzQAbAnEp3ulw8pwA6qK78fFWU=",
        description: "Nullam feugiat, nisi nec consequat convallis, urna felis consectetur enim, at sodales tellus lorem nec neque."
      },
      { 
        name: "Dr. Lili Johnson",
        specialty: "Dermatologist",
        photoURL: "https://media.istockphoto.com/id/1041157832/photo/female-doctor-sitting-at-the-desk-near-window.jpg?s=1024x1024&w=is&k=20&c=QN0pzgj-S2zQB8OIEiimWnVp4kOZ7Q288zsTOND0gF0=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      { 
        name: "Dr. Samir Patil",
        specialty: "Neurologist",
        photoURL: "https://media.istockphoto.com/id/697239632/photo/studio-shot-of-young-handsome-muscular-indian-man-doctor-against-gray-background.jpg?s=1024x1024&w=is&k=20&c=ZN9dpPcmHNbCBwXSdRz1ASuHTKiyNile4tvLL-B4dX4=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      { 
        name: "Dr. Anand Kumar",
        specialty: "Dermatologist",
        photoURL: "https://media.istockphoto.com/id/689514332/photo/studio-shot-of-young-bearded-persian-man-doctor-against-gray-background.jpg?s=1024x1024&w=is&k=20&c=48JnJSrCxLMJt0mMKKIuYUYs7EkTdJqDGW9CfjvVdhs=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      { 
        name: "Dr. Tony D-suza",
        specialty: "Dermatologist",
        photoURL: "https://media.istockphoto.com/id/1210047569/photo/close-up-portrait-of-his-he-nice-attractive-content-smart-clever-experienced-calm-bearded-guy.jpg?s=1024x1024&w=is&k=20&c=HxfZUlS15CwuTh-vej7inxB1cH8t-M9_0MY2m8yAjiQ=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      {
        name: "Dr. chang li",
        specialty: "Dermatologist",
        photoURL: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      { 
        name: "Dr. monalisa Parker",
        specialty: "Dermatologist",
        photoURL: "https://media.istockphoto.com/id/1399387361/photo/confident-young-mixed-race-female-doctor-standing-with-her-arms-crossed-inside-a-medical.jpg?s=1024x1024&w=is&k=20&c=1W3l1El3UrIttcBZMSAdeO1OS2jVL9b4utfES4Ya_ac=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },

      { 
        name: "Dr. Hailey kaap",
        specialty: "Dermatologist",
        photoURL: "https://media.istockphoto.com/id/1419570018/photo/a-medical-student-of-the-university-came-to-the-hospital-to-undergo-practice.jpg?s=1024x1024&w=is&k=20&c=sbOwR_KGncvvnsGpq7aWmpoz4tFOj-87g0JriHrceVo=",
        description: "Praesent posuere mauris non elit hendrerit, a tempus mauris tristique. Suspendisse potenti."
      },
      // Add more doctors as needed
    ];
  <div className="name"></div>
    
    // Create slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    document.body.appendChild(sliderContainer);
  
    // Create slider
    const slider = document.createElement("div");
    slider.classList.add("slider");
    sliderContainer.appendChild(slider);
  
    // Create cards
    doctorsData.forEach(doctor => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = doctor.photoURL;
      img.alt = doctor.name;
      card.appendChild(img);
  
      const name = document.createElement("h2");
      name.textContent = doctor.name;
      card.appendChild(name);
  
      const specialty = document.createElement("p");
      specialty.textContent = doctor.specialty;
      card.appendChild(specialty);
  
      const description = document.createElement("p");
      description.textContent = doctor.description;
      card.appendChild(description);
  
      slider.appendChild(card);
    });
  
    // Create navigation buttons
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prev-btn");
    prevBtn.textContent = "<";
    sliderContainer.appendChild(prevBtn);
  
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = ">";
    sliderContainer.appendChild(nextBtn);
  
    // Slide functionality
    let slideIndex = 0;
  
    function showSlide(index) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  
    function slideNext() {
      slideIndex++;
      if (slideIndex > doctorsData.length - 1) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
  
    function slidePrev() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = doctorsData.length - 1;
      }
      showSlide(slideIndex);
    }
  
    nextBtn.addEventListener("click", slideNext);
    prevBtn.addEventListener("click", slidePrev);
  });
  
  
  export default Slider;