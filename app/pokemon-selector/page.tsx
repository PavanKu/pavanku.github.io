'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Action, Option, Select } from '../components/Select';
import styles from './PokemonSelector.module.css';

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";

type ResultType = {
    name: string,
    url: string
}

type APIResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: ResultType[]
}

export default function PokemonSelectorPage() {
    const [result, setResult] = useState<APIResponse | null>(null);
    const [selected, setSelected] = useState<Option[]>([]);
    useEffect(() => {
        async function getpokemonData() {
            const response = await fetch(API_ENDPOINT);
            if(!response.ok) {
                throw new Error('Failed to get pokemon data from API');
            }
        
            const data:APIResponse = await response.json();
            setResult(data);
        }
        getpokemonData();
    }, [])
    

    const options = useMemo(() => {
        return result?.results.map(r => ({label: r.name, value: r.name})) || [];
    }, [result]);

    const actionHandler = useCallback((type:Action, option:string) => {
        if(type === 'select') {
            const newOption = options.filter(r => r.value === option);
            setSelected((selected) => selected.concat(newOption));
        } else if(type === 'unselect') {
            setSelected((selected) => selected.filter(r => r.value !== option));
        }
    }, [options]);
    
    return (
        <div className={styles.container}>
            <Select options={options} isLoading={false} error={""} selected={selected} onAction={actionHandler} />
        </div>
    )
}