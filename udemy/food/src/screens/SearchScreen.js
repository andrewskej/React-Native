import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //$ || $$ || $$$
        return results.filter(result => {
            return result.price === price;
        })
    }

    //<> (instead of View) automatically aligns the screen layout to some extent
    return (
        <> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}    
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"/>
                <ResultsList 
                    results={filterResultsByPrice('$$')}
                    title="Affordable"/>
                <ResultsList 
                    results={filterResultsByPrice('$$$')}
                    title="Pricey"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;