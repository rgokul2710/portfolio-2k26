// Login Functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "dashboard.html";  // Redirect to Dashboard on successful login
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Show user info on Dashboard
onAuthStateChanged(auth, function(user) {
    if (user) {
        const usernameDisplay = document.getElementById('username');
        usernameDisplay.textContent = `Welcome, ${user.displayName || user.email}`;
        loadHabits();
    } else {
        window.location.href = "index.html";  // Redirect to login page if not authenticated
    }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
});

// Load Habits (for Dashboard)
function loadHabits() {
    const habitList = document.getElementById('habit-list');
    getDocs(collection(db, "habits")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const habit = doc.data();
            const habitCard = document.createElement('div');
            habitCard.classList.add('habit-card');
            habitCard.innerHTML = `
                <h2>${habit.name}</h2>
                <p>${habit.emoji} - Color: ${habit.color}</p>
                <button onclick="markHabitDone('${doc.id}')">Mark as Done</button>
            `;
            habitList.appendChild(habitCard);
        });
    });
}

// Mark Habit as Done
function markHabitDone(habitId) {
    const habitRef = doc(db, "habits", habitId);
    updateDoc(habitRef, {
        done: true
    }).then(() => {
        loadHabits();
    });
}
