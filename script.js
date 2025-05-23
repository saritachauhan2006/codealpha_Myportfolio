const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const Menuicon = document.querySelector('#menuicon');
const navbar =document.querySelector('header nav');

Menuicon.addEventListener('click',()=>{
    Menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
})

const activepage = () => {
    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    sections.forEach(section => {
        section.classList.remove('active');
    });
     Menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// 🛠 Fix the logic here
navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        activepage(); // remove previous active
        link.classList.add('active'); // set current nav link
        setTimeout(() => {
            sections[idx].classList.add('active'); // correct variable name
        }, 1100);
    });
});

// Logo click returns to first section
logolink.addEventListener('click', () => {
    if(!navlinks[0].classList.contains('active')){
        activepage();
   
    navlinks[0].classList.add('active');

    setTimeout(() => {
        sections[0].classList.add('active');
    }, 1100);
}
});
logolink.addEventListener('click', (e) => {
    e.preventDefault();  // This stops the default action of the link
});



// On first load, make first section active
sections.forEach(section => {
    section.classList.remove('active');
});
sections[0].classList.add('active');
navlinks[0].classList.add('active');

// Resume buttons
const resumebtns = document.querySelectorAll('.resumebtn');
resumebtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumedetail = document.querySelectorAll('.detail');

        resumebtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumedetail.forEach(details => {
            details.classList.remove('active');
        });
        resumedetail[idx].classList.add('active');
    });
});
