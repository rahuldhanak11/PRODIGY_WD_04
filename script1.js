function redirecttoEmail() {
    // Replace 'your.email@example.com' with your actual email address
    var emailAddress = 'rahul.dhanak@somaiya.com';

    // Create the mailto URI
    var mailtoLink = 'mailto:' + emailAddress;

    // Open the user's default email client
    window.location.href = mailtoLink;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function redirectToPrj1() {
    window.location.href = 'https://github.com/rahuldhanak11/PRODIGY_WD_01';
    window.open(url, '_blank')
  }

  function redirectToPrj2() {
    window.location.href = 'https://github.com/rahuldhanak11/PRODIGY_WD_02';
    window.open(url, '_blank')
  }
  
  function redirectToPrj3() {
    window.location.href = 'https://github.com/rahuldhanak11/PRODIGY_WD_03';
    window.open(url, '_blank')
  }