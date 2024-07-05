// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, creator, creationDate, description) {
    const nft = {
        name,         
        creator,      
        creationDate,
        description   
    };
    nfts.push(nft);
    console.log("Minted NFT:");
    console.log("Name: " + nft.name);
    console.log("Creator: " + nft.creator);
    console.log("Creation Date: " + nft.creationDate);
    console.log("Description: " + nft.description);
    console.log("*******************************");
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    console.log("Listing all NFTs:");
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Creator: " + nfts[i].creator);
        console.log("Creation Date: " + nfts[i].creationDate);
        console.log("Description: " + nfts[i].description);
        console.log("---------------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Sundar Saanjh", "Ananya", "2023-01-01", "A picturesque sunset over the Aravalli Range.");
mintNFT("Tiranga Sagar", "Raj", "2023-02-14", "Waves crashing onto the shore of Kerala.");
mintNFT("Raat ki Chandni", "Priya", "2023-03-30", "The night skyline of Delhi.");

listNFTs();
console.log("Total Supply: " + getTotalSupply());