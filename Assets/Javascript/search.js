function searchFunction() {
    noresultsText.style.display = "none";

    // Declare variables
    var input, filter, course, h3, i;
    input = document.getElementById("search");
    noresultsText = document.getElementById("noResults");
    filter = input.value.toLowerCase();
    courses = document.getElementsByClassName("course")

    console.log(courses.length)

    // Loop through all courses, and hide those whose heading does not match the search query
    for (i = 0; i < courses.length; i++) {
        let resultFound = false

        h1 = courses[i].getElementsByTagName("h1")[0];
        h1 = h1.innerHTML.toLowerCase()

        if (h1.includes(filter)) {
            courses[i].style.display = "";
            resultFound = true;
        } else {
            courses[i].style.display = "none";
        }

        if (!resultFound) {noresultsText.style.display = "";} else {noresultsText.style.display = "none";}
    }
}