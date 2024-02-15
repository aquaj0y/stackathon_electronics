let navLinks = document.querySelector("nav-link");

    document.addEventListener("DOMContentLoaded", function () {

        // Get all navigation links by class name
      

        // Add click event listener to each navigation link
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function (event) {
                // Prevent the default behavior of the link
                event.preventDefault()

                // Get the target ID from the clicked link
                let targetId = this.getAttribute("href").substring(1)

                // Build the URL of the target HTML page
                let targetUrl = targetId + ".html"

                // Change the src attribute of the iframe
                document.getElementById("contentFrame").src = targetUrl
            })
        }
    })

