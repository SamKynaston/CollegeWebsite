function searchFunction() {
    // Declare variables
    var input, filter, course, h3, i;
    input = document.getElementById("search");
    filter = input.value.toLowerCase();
    courses = document.getElementsByClassName("parent")

    // Loop through all courses, and hide those whose heading does not match the search query
    for (i = 0; i < courses.length; i++) {
        h1 = courses[i].getElementsByTagName("h1")[0];
        h1 = h1.innerHTML.toLowerCase()
        
        if (h1.includes(filter)) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }
    }
}