// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Fundamentals, Mathematics, Algorithms, Numbers

// my solution
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// best practice
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}