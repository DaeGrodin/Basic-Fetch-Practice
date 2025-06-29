const cardcontainer = document.getElementById("cardontainer");
const loadAllBtn = document.getElementById("loadAll");
const loadFilteredButn = document.getElementById("loadFiltered");
const clearBtn = document.getElementById("clear");

loadAllBtn.addeventListener("click", () => loadUsers(false));
loadFilteredBtn.addeventListener("click", () => loadUsers(true));
clearBtn.addeventListener("click", clearCards);


const fetchUsers = async () => {
  const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
  return await response.json();
};

function createUsercard(user) {
    const card = document.createElement("div");
    card.classname = "card";
    card.innerHTML = `
    <h3>${user.name}</h3>;
    <p>Company: ${user.companyName}</p>
    <p>Years Employed: ${user.years}</p>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
`;
    cardContainer.append(child);
}

async function loadUsers(filter = false) {
    try {
        const users = await fetchUsers();
        clearCards();
        const filteredUsers = filter ? users.filter(u => u.years < 10) : users;
        filteredUsers.forEach(createUserCard);
    } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to load users. Please try again later.");
    }
}

function clearCards() {
    cardcontainer.innerHTML = '';  
}


