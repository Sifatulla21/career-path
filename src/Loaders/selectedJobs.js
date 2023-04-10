import { getShoppingCart } from '../utilities/fakedb';
const jobLoader = async () => {
const loadedJobs = await fetch('details.json');
const jobs = await loadedJobs.json();

const storedCart = getShoppingCart();
const savedCart = [];  
    for(const id in storedCart){
        const addedJob = jobs.find(jb => jb.id === id);
        if(addedJob){
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }
return savedCart;
}

export default jobLoader;