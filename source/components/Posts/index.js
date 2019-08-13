// Core
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { List } from 'immutable';
import FlipMove from 'react-flip-move';

// Instruments
import Styles from './styles.m.css';
import { mockedProfile } from '../../instruments/mockedData';

// Components
import { Composer, Catcher, Post } from '../../components';

// Actions
import { postsActions } from "../../bus/posts/actions";

const mapStateToProps = (state) => { // достает состояние из redux
    //console.log('-> state', state);
    return {
        posts: state.posts, // свойство (состояния posts) объекта попадет в пропсы нужного компонента
    };
};

const mapDispatchToProps = (dispatch) => { // привяжет нужные actions к пропсам компонента, вызывать dispatch явно больше не нужно, функция сделает это под копотом
    return {
        actions: bindActionCreators({ fetchPostsAsync: postsActions.fetchPostsAsync, createPostAsync: postsActions.createPostAsync }, dispatch), // возвр объект actions, избавл от заглушки и получ настоящий action; bindActionCreators для вложенных объектов
    };
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Posts extends Component {
    static defaultProps = {
        // State
        //posts:   List(), // лишняя заглушка
        profile: mockedProfile,

        // Actions
        actions: {
            // Users
            fetchUsersAsync: () => {},

            // Posts
            // fetchPostsAsync: () => {},
            // removePostAsync: () => {},
            // createPostAsync: (comment) => {
            //     console.log('create post', comment);
            // },
            // likePostAsync:   () => {},
            // unlikePostAsync: () => {},
        },
    };

    componentDidMount () { // получ список постов для стены
        const { actions } = this.props;

        // console.log('-> this.props', this.props);

        actions.fetchPostsAsync();
    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => { // список из компонентов post
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        author = { post.get('author') }
                        comment = { post.get('comment') }
                        created = { post.get('created') }
                        id = { post.get('id') }
                        likes = { post.get('likes') }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return ( // composer - форма для создания поста
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}
