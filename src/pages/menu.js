import React from 'react'
import MenuPage from '../compontents/MenuPage'
import Koszyk from '../compontents/Koszyk'

const Menu = (props) => {

    const [koszyk, setKoszyk] = React.useState([]);
    const [suma, setSuma] = React.useState(0);
    const [dostawa,setDostawa] = React.useState([{cena:0, css: 'aktywna'},{cena:10, css: ''},{cena:15, css: ''}]);

    React.useEffect(() => {
        
        window.scrollTo(0, 0);
    }, [])

    

    const clearKoszyk = () => {

        console.log('czyszcze koszyk');
        setKoszyk([])
        setSuma(0)
        setDostawa([{cena:0, css: 'aktywna'},{cena:10, css: ''},{cena:15, css: ''}])
        
    }

    const dostawaHandler = (id, ready) => {

       
        if(!ready){
        if(dostawa[id].css === ''){
            
            let indeksPoprzednika

            let temp = [...dostawa]
            for(let i=0; i<temp.length; i++){
                if(temp[i].css === 'aktywna'){
                    indeksPoprzednika=i;
                }
                temp[i].css = ''
            }

            temp[id].css = 'aktywna'
            setDostawa(temp)
            setSuma(prevValue => prevValue - temp[indeksPoprzednika].cena + temp[id].cena)
            console.log(temp);
        }}
        
    }


    const sumaUpdate = (cena, operation) => {

        if (operation === '+') {
            setSuma(prevValue => prevValue + cena)
        } else if (operation === '-') {
            setSuma(prevValue => prevValue - cena)
        }

    }


    const countHandler = (e, index) => {

        e.preventDefault();

        let tymczasowa = [...koszyk];

        tymczasowa[index].count = tymczasowa[index].count + 1;

        setKoszyk(tymczasowa)

        sumaUpdate(tymczasowa[index].price, '+')
    }


    const koszykHandler = (e, dieta) => {
        e.preventDefault()

        let szukaj = koszyk.findIndex((item) => item.name === dieta.name)

        if (szukaj === -1) {
            setKoszyk(koszyk.concat(dieta))
            sumaUpdate(dieta.price, '+')
        }else{
            countHandler(e, szukaj)
        }  

    }

    const removeItemHandler = (e, index) => {

        e.preventDefault()

        let tymczasowa = [...koszyk];

        console.log(`klikam ${index}`);

        if(tymczasowa[index].count - 1 >= 0)
        {
            tymczasowa[index].count = tymczasowa[index].count - 1;

            setKoszyk(tymczasowa)

            sumaUpdate(tymczasowa[index].price, '-')

        }
        
        if(tymczasowa[index].count === 0){
            tymczasowa.splice(index,1)
            setKoszyk(tymczasowa)
        }
  
    }

    const removeHandler = (e, index) => {
        e.preventDefault()
        console.log(index);

        const tempArr = koszyk.filter((item, i) => i !== index)

        if (koszyk.length === 1) {
            setKoszyk([])
            sumaUpdate(koszyk[index].price*koszyk[index].count, '-')
        } else {
            setKoszyk(tempArr)
            sumaUpdate(koszyk[index].price*koszyk[index].count, '-')
        }
    }

    return (
        <>
            <Koszyk clearKoszyk={clearKoszyk} remove={removeHandler} dostawaH={dostawaHandler} dostawaV={dostawa} removeItem={removeItemHandler} koszyk={koszyk} suma={suma} add={koszykHandler} count={countHandler}></Koszyk>
            <MenuPage handler={koszykHandler}></MenuPage>
        </>);
}

export default Menu;