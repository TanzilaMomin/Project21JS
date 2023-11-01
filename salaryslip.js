const arr=[ 10000,20000,15000,25000,40000,12000];
const result=arr.map((item)=>{
    const basic=item;
    const HRA=0.2*basic;
    const DA=0.1*basic;
    const CA=0.15*basic;
    const PF=0.12*basic;

    const GrossSal=basic+HRA+DA+CA-PF; 

    const objsal={
        basic,
        HRA,
        DA,
        CA,
        PF,
        GrossSal
    }
    return objsal
})
console.log(result);
