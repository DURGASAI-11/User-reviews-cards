const reviews=[
    {
        id:1,
        name:"Mouna",
        job:"UX DESIGNER",
        img:"https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M=",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est vero commodi ullam eaque minima sunt reprehenderit minusdignissimos iusto?",
    },
    {
        id:2,
        name:"Donna",
        job:"WEB DESIGNER",
        img:"https://t3.ftcdn.net/jpg/02/88/01/98/360_F_288019837_M5b7qGaXpmMfWOSgso53PWQu9rIdg5et.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est vero commodi ullam eaque minima sunt reprehenderit minusdignissimos iusto?",
    },
    {
        id:3,
        name:"alicia",
        job:"ROBOTICS",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyaEt7obPf-KxuoiZUaG-0vmnK0TI2JMz8TLIrZnDXMFpqrwaahrCY1HKqNUp2CNnnnY&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est vero commodi ullam eaque minima sunt reprehenderit minusdignissimos iusto?",
    },
    {
        id:4,
        name:"rachel",
        job:"BLOCK CHAIN DEVELOPER",
        img:"https://www.gateway.dental/wp-content/uploads/2019/05/kid-smiling-thumbs-up.jpg",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est vero commodi ullam eaque minima sunt reprehenderit minusdignissimos iusto?",
    }
];


//select items
const img =document.getElementById("person-img")
const author=document.getElementById('author')
const job=document.getElementById('job')
const info=document.getElementById('info')

const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const randomBtn=document.querySelector('.random-btn')

//set starting item

let currentItem=0;

//load initail item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

//show person based on item 
function showPerson(currentItem){
    const item=reviews[currentItem];
    img.src=reviews[currentItem].img;
    author.textContent=reviews[currentItem].name;
    job.textContent=item.job;
    job.style.fontWeight=550;
    info.textContent=item.text;
}
//show next person


nextBtn.addEventListener("click",function(){
    if(currentItem!==((reviews.length)-1))
    currentItem++;
    showPerson(currentItem);

})
//show previous persons
prevBtn.addEventListener("click",function(){
    if(currentItem>=1 || currentItem==((reviews.length)-1))
    currentItem--;
    showPerson(currentItem);
})
//show random picture

randomBtn.addEventListener('click',function(){
        currentItem=Math.floor(Math.random()*reviews.length);
        showPerson(currentItem);
})