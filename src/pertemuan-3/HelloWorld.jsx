export default function HelloWorld(){
    const propsUsecard = {
        nama: "Zahwa",
        nim: "2455301203",
        tanggal: "2006/08/31"
    };
    return (
        <div>
          <img src = "img/cyber.png" width="100%"/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GretingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "Sahkila"
            nim = "2455301111"
            tanggal = "2006/12/03"/>
            <UserCard {...propsUsecard}/>
        </div>
    )
}

function GretingBinjai(){
    return(
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

// function CobaCoba(){
//     return(
//         <small>Ini Coba Coba</small>
//     )
// }