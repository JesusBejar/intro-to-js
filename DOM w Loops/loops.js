let myList = document.getElenentById( 'myList');

let friends = ['John', 'Jane', 'Mary', 'Joe'];


// below are three different ways to loop throught the
// friends array above and add them to an element
// called myList
for (let i = 0; i < friends.length; i++) {
   let listIten = document.createElenent ('li');
   ListItem. textContent - friends[i];
  myList. append[listIten];
}

for (friend of friends) {
    myList.innerHTML += '<li>' + friend + '</li>';
}

friends. forEach( friend => {
    let listIten = document.createElement('li');
    listItem. textContent = friend;
   myList. append(listItem);
});
 
// video link below
// https://www.loom.com/share/0a45366b8a914345ae00be7c2764cded