import React from 'react';
import { conechnay, changeValue, changeCost, addObertki } from './slices/slice';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const { chocolateCounter} = counter;
    return (
        <div>
            <h1>{chocolateCounter}</h1>
            <button className='btn btn-primary' onClick={() => dispatch(conechnay())}>LET'S SEE</button>
            <h4>Введите сумму</h4>
            <input onChange={(e) => {dispatch(changeValue(e.target.value))}} type="text" className="input form-control mb" aria-label="Amount (to the nearest dollar)" placeholder='Введите сумму:'></input>
            <h4>Введите стоимость шоколадки</h4>
            <input onChange={(e) => {dispatch(changeCost(e.target.value))}} type="text" className="input form-control mb" aria-label="Amount (to the nearest dollar)" placeholder='Введите стоимость шоколада:'></input>
            <h4>Введите кол-во оберток</h4>
            <input onChange={(e) => {dispatch(addObertki(e.target.value))}} type="text" className="input form-control mb" aria-label="Amount (to the nearest dollar)" placeholder='Сколько оберток у вас уже есть:'></input>
        </div>
    );
};

export default Main;