import React, {Component} from 'react';
import PropTypes from 'prop-types'

import {ListView, StyleSheet, View, Modal, WebView, TouchableOpacity} from 'react-native';
import * as globalStyles from '../styles/global';
import SmallText from './SmallText';
import NewsItem from './NewsItem';

export default class NewsFeed extends Component {

    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1.title !== row2.title
        })
        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            modalVisible:false
        }        
        this.onModalOpen = this.onModalOpen.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }


    onModalOpen(){
        this.setState({
            modalVisible:true,
            modalUrl:url
        })
    }

    onModalClose(){
        this.setState({
            modalVisible:false
        })
    }

    renderModal(){
        return(
            <Modal 
                animationType="slide"
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity 
                        onPress={this.onModalClose}
                        style={styles.closeButton}
                    >
                        <SmallText>close</SmallText>
                    </TouchableOpacity>
                    <WebView
                        scalesPageToFit
                        source={{ uri:this.state.modalUrl }}
                    />
                </View>
            </Modal>
        )
    }

    renderRow(rowData, ...rest){
        const index = parseInt(rest[1],10);
        return(
            <NewsItem 
                onPress={() => this.onModalOpen(rowData.url)}
                style={styles.newsItem} 
                index={index} 
                {...rowData}
            />
        )
    }

    render(){
        return(
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <ListView
                    enableEmptySections 
                    dataSource={this.state.dataSource} 
                    renderRow={this.renderRow} 
                    style={this.props.listStyles}
                />
                {this.renderModal()}
            </View>
        )
    }
}

// NewsFeed.propTypes = {
//     news:PropTypes.arrayOf(PropTypes.object),
//     listStyles: View.propTypes.style
// }

NewsFeed.defaultProps = {
    news: [
        {
            title: 'React',
            imageUrl:'https://facebook.github.io/react/img/logo_og.png',
            description:'React Native: much more complicated than React?',
            date: new Date(),
            author:'Yousik Jeon',
            location:'Seoul, South Korea',
            url:'https://facebook.github.io/react-native'
        },
        {
            title: 'React Native',
            imageUrl:'https://facebook.github.io/react/img/logo_og.png',
            description:'React Native2: much simpler than Native iOS/Android?',
            date: new Date(),
            author:'Andrew Jeon',
            location:'Montreal, Canada',
            url:'https://facebook.github.io/react-native'
        },
        {
            title: '[특종]이현지, 전유식 좋아해',
            imageUrl:'https://facebook.github.io/react/img/logo_og.png',
            description:'React Native: Gosh its complicated',
            date: new Date(),
            author:'Andrew Jeon',
            location:'Hell, in your mind',
            url:'https://facebook.github.io/react-native'
        },
    ]
}

const styles = StyleSheet.create({
    newsItem:{
        marginBottom:20
    },
    modalContent:{
        flex:1,
        justifyContent:'center',
        paddingTop:20,
        backgroundColor:globalStyles.BG_COLOR
    },
    closeButton:{
        paddingVertical:5,
        paddingHorizontal:10,
        flexDirection:'row'
    }
})

