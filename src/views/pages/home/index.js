import React from 'react';
import styled from "styled-components";
import CardWrapper from "../../components/Card/CardWrapper";
import MainCover from "./components/MainCover";

const list = [
    {
        "id": "4TBSG2Oqu0Q",
        "created_at": "2020-07-01T18:31:27-04:00",
        "updated_at": "2020-08-21T01:10:13-04:00",
        "promoted_at": null,
        "width": 6016,
        "height": 4016,
        "color": "#100E11",
        "description": null,
        "alt_description": "person using black laptop computer",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/4TBSG2Oqu0Q",
            "html": "https://unsplash.com/photos/4TBSG2Oqu0Q",
            "download": "https://unsplash.com/photos/4TBSG2Oqu0Q/download",
            "download_location": "https://api.unsplash.com/photos/4TBSG2Oqu0Q/download"
        },
        "categories": [],
        "likes": 289,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
            "impression_urls": [
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7348940&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7367766&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
            ],
            "tagline": "Designed to be the Best",
            "tagline_url": "http://www.dell.com/xps",
            "sponsor": {
                "id": "2DC3GyeqWjI",
                "updated_at": "2020-08-24T10:20:43-04:00",
                "username": "xps",
                "name": "XPS",
                "first_name": "XPS",
                "last_name": null,
                "twitter_username": "Dell",
                "portfolio_url": "http://www.Dell.com/XPS",
                "bio": "Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.",
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/xps",
                    "html": "https://unsplash.com/@xps",
                    "photos": "https://api.unsplash.com/users/xps/photos",
                    "likes": "https://api.unsplash.com/users/xps/likes",
                    "portfolio": "https://api.unsplash.com/users/xps/portfolio",
                    "following": "https://api.unsplash.com/users/xps/following",
                    "followers": "https://api.unsplash.com/users/xps/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                    "medium": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                    "large": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                "instagram_username": "dell",
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 26,
                "accepted_tos": true
            }
        },
        "user": {
            "id": "2DC3GyeqWjI",
            "updated_at": "2020-08-24T10:20:43-04:00",
            "username": "xps",
            "name": "XPS",
            "first_name": "XPS",
            "last_name": null,
            "twitter_username": "Dell",
            "portfolio_url": "http://www.Dell.com/XPS",
            "bio": "Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.",
            "location": null,
            "links": {
                "self": "https://api.unsplash.com/users/xps",
                "html": "https://unsplash.com/@xps",
                "photos": "https://api.unsplash.com/users/xps/photos",
                "likes": "https://api.unsplash.com/users/xps/likes",
                "portfolio": "https://api.unsplash.com/users/xps/portfolio",
                "following": "https://api.unsplash.com/users/xps/following",
                "followers": "https://api.unsplash.com/users/xps/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "dell",
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 26,
            "accepted_tos": true
        }
    },
    {
        "id": "PqhC9GzO8Bc",
        "created_at": "2020-08-24T09:22:38-04:00",
        "updated_at": "2020-08-24T10:42:03-04:00",
        "promoted_at": "2020-08-24T10:42:03-04:00",
        "width": 3039,
        "height": 4559,
        "color": "#1E1F20",
        "description": "Sand and waves that felt more like the ocean than a lake in the midwest of America.",
        "alt_description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598275239648-b0eadf5f2bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598275239648-b0eadf5f2bc3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598275239648-b0eadf5f2bc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598275239648-b0eadf5f2bc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598275239648-b0eadf5f2bc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/PqhC9GzO8Bc",
            "html": "https://unsplash.com/photos/PqhC9GzO8Bc",
            "download": "https://unsplash.com/photos/PqhC9GzO8Bc/download",
            "download_location": "https://api.unsplash.com/photos/PqhC9GzO8Bc/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "7HdpGZL_VdY",
            "updated_at": "2020-08-24T10:42:03-04:00",
            "username": "iam_aspencer",
            "name": "Andrew Spencer",
            "first_name": "Andrew",
            "last_name": "Spencer",
            "twitter_username": "iam_aspencer",
            "portfolio_url": "http://andrew-spencer.com",
            "bio": "A creative problem solver with a passion for designing and building a better web. Taking pictures in my free time.\r\nYou can support my work via:\r\n\r\npaypal.me/aspencer116",
            "location": "Ohio",
            "links": {
                "self": "https://api.unsplash.com/users/iam_aspencer",
                "html": "https://unsplash.com/@iam_aspencer",
                "photos": "https://api.unsplash.com/users/iam_aspencer/photos",
                "likes": "https://api.unsplash.com/users/iam_aspencer/likes",
                "portfolio": "https://api.unsplash.com/users/iam_aspencer/portfolio",
                "following": "https://api.unsplash.com/users/iam_aspencer/following",
                "followers": "https://api.unsplash.com/users/iam_aspencer/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1583628659775-3ea07aabb0b4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1583628659775-3ea07aabb0b4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1583628659775-3ea07aabb0b4image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "iam_aspencer",
            "total_collections": 7,
            "total_likes": 274,
            "total_photos": 106,
            "accepted_tos": true
        }
    },
    {
        "id": "pUpt-bYkZdk",
        "created_at": "2020-08-24T10:38:56-04:00",
        "updated_at": "2020-08-24T10:41:45-04:00",
        "promoted_at": "2020-08-24T10:41:45-04:00",
        "width": 5755,
        "height": 3842,
        "color": "#F9F9F9",
        "description": null,
        "alt_description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598279918102-f1ef8af66a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598279918102-f1ef8af66a3d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598279918102-f1ef8af66a3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598279918102-f1ef8af66a3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598279918102-f1ef8af66a3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/pUpt-bYkZdk",
            "html": "https://unsplash.com/photos/pUpt-bYkZdk",
            "download": "https://unsplash.com/photos/pUpt-bYkZdk/download",
            "download_location": "https://api.unsplash.com/photos/pUpt-bYkZdk/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "tDBubaRHt5s",
            "updated_at": "2020-08-24T10:41:45-04:00",
            "username": "kxvn_lx",
            "name": "kevin laminto",
            "first_name": "kevin",
            "last_name": "laminto",
            "twitter_username": "kevinlx_",
            "portfolio_url": "https://www.instagram.com/kxvn.lx",
            "bio": "business enquires: kevin.laminto@gmail.com",
            "location": "Melbourne, Australia",
            "links": {
                "self": "https://api.unsplash.com/users/kxvn_lx",
                "html": "https://unsplash.com/@kxvn_lx",
                "photos": "https://api.unsplash.com/users/kxvn_lx/photos",
                "likes": "https://api.unsplash.com/users/kxvn_lx/likes",
                "portfolio": "https://api.unsplash.com/users/kxvn_lx/portfolio",
                "following": "https://api.unsplash.com/users/kxvn_lx/following",
                "followers": "https://api.unsplash.com/users/kxvn_lx/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1568717819626-284009b18807image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1568717819626-284009b18807image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1568717819626-284009b18807image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "kxvn.lx",
            "total_collections": 3,
            "total_likes": 46,
            "total_photos": 370,
            "accepted_tos": true
        }
    },
    {
        "id": "UoFJMqwg-NE",
        "created_at": "2020-08-02T15:29:43-04:00",
        "updated_at": "2020-08-24T10:39:02-04:00",
        "promoted_at": "2020-08-24T10:39:02-04:00",
        "width": 6000,
        "height": 4000,
        "color": "#9ACBE3",
        "description": null,
        "alt_description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1596396549056-905455fecd9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1596396549056-905455fecd9e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1596396549056-905455fecd9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1596396549056-905455fecd9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1596396549056-905455fecd9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/UoFJMqwg-NE",
            "html": "https://unsplash.com/photos/UoFJMqwg-NE",
            "download": "https://unsplash.com/photos/UoFJMqwg-NE/download",
            "download_location": "https://api.unsplash.com/photos/UoFJMqwg-NE/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "w5fGE50ec3A",
            "updated_at": "2020-08-24T10:39:02-04:00",
            "username": "justdushawn",
            "name": "dusan jovic",
            "first_name": "dusan",
            "last_name": "jovic",
            "twitter_username": null,
            "portfolio_url": "http://www.justdushawn.com",
            "bio": "Videographer and photographer living in New York",
            "location": "new york",
            "links": {
                "self": "https://api.unsplash.com/users/justdushawn",
                "html": "https://unsplash.com/@justdushawn",
                "photos": "https://api.unsplash.com/users/justdushawn/photos",
                "likes": "https://api.unsplash.com/users/justdushawn/likes",
                "portfolio": "https://api.unsplash.com/users/justdushawn/portfolio",
                "following": "https://api.unsplash.com/users/justdushawn/following",
                "followers": "https://api.unsplash.com/users/justdushawn/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1588870694910-84a7607681faimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1588870694910-84a7607681faimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1588870694910-84a7607681faimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "justdushawn",
            "total_collections": 1,
            "total_likes": 2,
            "total_photos": 2,
            "accepted_tos": true
        }
    },
    {
        "id": "Rp2cfQE9I34",
        "created_at": "2020-08-24T09:03:00-04:00",
        "updated_at": "2020-08-24T10:38:07-04:00",
        "promoted_at": "2020-08-24T10:38:07-04:00",
        "width": 3995,
        "height": 5992,
        "color": "#E5C5A3",
        "description": null,
        "alt_description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598267420907-5a58f0f7a383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598267420907-5a58f0f7a383?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598267420907-5a58f0f7a383?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598267420907-5a58f0f7a383?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598267420907-5a58f0f7a383?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/Rp2cfQE9I34",
            "html": "https://unsplash.com/photos/Rp2cfQE9I34",
            "download": "https://unsplash.com/photos/Rp2cfQE9I34/download",
            "download_location": "https://api.unsplash.com/photos/Rp2cfQE9I34/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "MtuDBPpKBos",
            "updated_at": "2020-08-24T10:39:29-04:00",
            "username": "hgwzk",
            "name": "Hugo D.",
            "first_name": "Hugo",
            "last_name": "D.",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": "Shooting with Fujifilm X-T20 and Drone DJI Spark\r\n ig : hgwzk",
            "location": "Hong-Kong",
            "links": {
                "self": "https://api.unsplash.com/users/hgwzk",
                "html": "https://unsplash.com/@hgwzk",
                "photos": "https://api.unsplash.com/users/hgwzk/photos",
                "likes": "https://api.unsplash.com/users/hgwzk/likes",
                "portfolio": "https://api.unsplash.com/users/hgwzk/portfolio",
                "following": "https://api.unsplash.com/users/hgwzk/following",
                "followers": "https://api.unsplash.com/users/hgwzk/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1539785399-7c6bd1c989f2.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-fb-1539785399-7c6bd1c989f2.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-fb-1539785399-7c6bd1c989f2.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "hgwzk",
            "total_collections": 0,
            "total_likes": 13,
            "total_photos": 110,
            "accepted_tos": true
        }
    },
    {
        "id": "I1Bt07HGWCs",
        "created_at": "2020-08-23T11:28:00-04:00",
        "updated_at": "2020-08-24T10:36:05-04:00",
        "promoted_at": "2020-08-24T10:36:05-04:00",
        "width": 3865,
        "height": 5797,
        "color": "#FBF7F1",
        "description": null,
        "alt_description": "woman in brown and white polka dot long sleeve shirt",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598196377345-dbbbf77399f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598196377345-dbbbf77399f1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598196377345-dbbbf77399f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598196377345-dbbbf77399f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598196377345-dbbbf77399f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/I1Bt07HGWCs",
            "html": "https://unsplash.com/photos/I1Bt07HGWCs",
            "download": "https://unsplash.com/photos/I1Bt07HGWCs/download",
            "download_location": "https://api.unsplash.com/photos/I1Bt07HGWCs/download"
        },
        "categories": [],
        "likes": 4,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "zBmuUhV0xG0",
            "updated_at": "2020-08-24T10:36:05-04:00",
            "username": "delfinaiacub",
            "name": "Delfina Iacub",
            "first_name": "Delfina",
            "last_name": "Iacub",
            "twitter_username": null,
            "portfolio_url": "https://www.instagram.com/fotografiadelfi",
            "bio": "Capturando momentos ",
            "location": "Argentina",
            "links": {
                "self": "https://api.unsplash.com/users/delfinaiacub",
                "html": "https://unsplash.com/@delfinaiacub",
                "photos": "https://api.unsplash.com/users/delfinaiacub/photos",
                "likes": "https://api.unsplash.com/users/delfinaiacub/likes",
                "portfolio": "https://api.unsplash.com/users/delfinaiacub/portfolio",
                "following": "https://api.unsplash.com/users/delfinaiacub/following",
                "followers": "https://api.unsplash.com/users/delfinaiacub/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1598161571061-8f248ac57c48image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1598161571061-8f248ac57c48image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1598161571061-8f248ac57c48image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "fotografiadelfi",
            "total_collections": 3,
            "total_likes": 2,
            "total_photos": 33,
            "accepted_tos": true
        }
    },
    {
        "id": "qggwE3Z_4xM",
        "created_at": "2020-08-23T12:43:23-04:00",
        "updated_at": "2020-08-24T10:30:01-04:00",
        "promoted_at": "2020-08-24T10:30:01-04:00",
        "width": 3712,
        "height": 5568,
        "color": "#07080A",
        "description": "Cat",
        "alt_description": "brown tabby cat on brown wooden table",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598200969729-44fcea3707d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598200969729-44fcea3707d7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598200969729-44fcea3707d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598200969729-44fcea3707d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598200969729-44fcea3707d7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/qggwE3Z_4xM",
            "html": "https://unsplash.com/photos/qggwE3Z_4xM",
            "download": "https://unsplash.com/photos/qggwE3Z_4xM/download",
            "download_location": "https://api.unsplash.com/photos/qggwE3Z_4xM/download"
        },
        "categories": [],
        "likes": 6,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "LfkDn6iQykc",
            "updated_at": "2020-08-24T10:30:01-04:00",
            "username": "kristapsungurs",
            "name": "Kristaps Ungurs",
            "first_name": "Kristaps",
            "last_name": "Ungurs",
            "twitter_username": null,
            "portfolio_url": "https://www.instagram.com/kristapsungurs/",
            "bio": "I enjoy the moments.  ↑ ",
            "location": "Riga,Latvia",
            "links": {
                "self": "https://api.unsplash.com/users/kristapsungurs",
                "html": "https://unsplash.com/@kristapsungurs",
                "photos": "https://api.unsplash.com/users/kristapsungurs/photos",
                "likes": "https://api.unsplash.com/users/kristapsungurs/likes",
                "portfolio": "https://api.unsplash.com/users/kristapsungurs/portfolio",
                "following": "https://api.unsplash.com/users/kristapsungurs/following",
                "followers": "https://api.unsplash.com/users/kristapsungurs/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1572640061210-c7b0e4c77d42image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1572640061210-c7b0e4c77d42image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1572640061210-c7b0e4c77d42image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "kristapsungurs",
            "total_collections": 5,
            "total_likes": 141,
            "total_photos": 693,
            "accepted_tos": true
        }
    },
    {
        "id": "PfIyuhDYLFw",
        "created_at": "2020-08-24T01:55:47-04:00",
        "updated_at": "2020-08-24T10:27:03-04:00",
        "promoted_at": "2020-08-24T10:27:03-04:00",
        "width": 3561,
        "height": 5342,
        "color": "#E5EEF2",
        "description": null,
        "alt_description": "white coupe on road during daytime",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598248497854-fcb5ea54d71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598248497854-fcb5ea54d71c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598248497854-fcb5ea54d71c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598248497854-fcb5ea54d71c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598248497854-fcb5ea54d71c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/PfIyuhDYLFw",
            "html": "https://unsplash.com/photos/PfIyuhDYLFw",
            "download": "https://unsplash.com/photos/PfIyuhDYLFw/download",
            "download_location": "https://api.unsplash.com/photos/PfIyuhDYLFw/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "Y8riNmDq4SU",
            "updated_at": "2020-08-24T10:27:03-04:00",
            "username": "introspectivedsgn",
            "name": "Erik Mclean",
            "first_name": "Erik",
            "last_name": "Mclean",
            "twitter_username": "introspectivenl",
            "portfolio_url": "http://paypal.me/Introspectivedsgn",
            "bio": "Donations are welcome! paypal.me/Introspectivedsgn \r\n& follow me on Instagram @introspectivedsgn\r\n",
            "location": "st. Johns, NL",
            "links": {
                "self": "https://api.unsplash.com/users/introspectivedsgn",
                "html": "https://unsplash.com/@introspectivedsgn",
                "photos": "https://api.unsplash.com/users/introspectivedsgn/photos",
                "likes": "https://api.unsplash.com/users/introspectivedsgn/likes",
                "portfolio": "https://api.unsplash.com/users/introspectivedsgn/portfolio",
                "following": "https://api.unsplash.com/users/introspectivedsgn/following",
                "followers": "https://api.unsplash.com/users/introspectivedsgn/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1585919663587-d1c631f56adbimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1585919663587-d1c631f56adbimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1585919663587-d1c631f56adbimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "introspectivedsgn",
            "total_collections": 21,
            "total_likes": 274,
            "total_photos": 6942,
            "accepted_tos": true
        }
    },
    {
        "id": "-yeqAknmpio",
        "created_at": "2020-08-23T23:58:10-04:00",
        "updated_at": "2020-08-24T10:24:03-04:00",
        "promoted_at": "2020-08-24T10:24:03-04:00",
        "width": 4016,
        "height": 6016,
        "color": "#291104",
        "description": null,
        "alt_description": "person in brown leather boots standing on brown sand during daytime",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598241478438-d9f6f29e8691?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/-yeqAknmpio",
            "html": "https://unsplash.com/photos/-yeqAknmpio",
            "download": "https://unsplash.com/photos/-yeqAknmpio/download",
            "download_location": "https://api.unsplash.com/photos/-yeqAknmpio/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "9VSSHKLdG9g",
            "updated_at": "2020-08-24T10:24:03-04:00",
            "username": "lightrisephotography",
            "name": "Devon Divine",
            "first_name": "Devon",
            "last_name": "Divine",
            "twitter_username": null,
            "portfolio_url": "http://Lightrisephotography.mypixieset.com",
            "bio": "Hey there! we're Devon & Johni Divine\r\n*Owners/founders of Lightrisephotography* + Psalm 113:3  + Elopements, Weddings & Lifestyle +booking 2021 weddings/elopements worldwide NEXT > SC, FL, AZ, CA  lightrisephoto.com",
            "location": "Cincinnati, OH",
            "links": {
                "self": "https://api.unsplash.com/users/lightrisephotography",
                "html": "https://unsplash.com/@lightrisephotography",
                "photos": "https://api.unsplash.com/users/lightrisephotography/photos",
                "likes": "https://api.unsplash.com/users/lightrisephotography/likes",
                "portfolio": "https://api.unsplash.com/users/lightrisephotography/portfolio",
                "following": "https://api.unsplash.com/users/lightrisephotography/following",
                "followers": "https://api.unsplash.com/users/lightrisephotography/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1537887787-d9e50f8a8e65.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-fb-1537887787-d9e50f8a8e65.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-fb-1537887787-d9e50f8a8e65.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "Lightrisephotography",
            "total_collections": 0,
            "total_likes": 19,
            "total_photos": 265,
            "accepted_tos": true
        }
    },
    {
        "id": "7LrjH48O_sU",
        "created_at": "2020-08-24T05:17:46-04:00",
        "updated_at": "2020-08-24T10:21:01-04:00",
        "promoted_at": "2020-08-24T10:21:01-04:00",
        "width": 3400,
        "height": 3400,
        "color": "#010102",
        "description": null,
        "alt_description": "black ipad on white textile",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1598260650504-f83ac9508d65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "full": "https://images.unsplash.com/photo-1598260650504-f83ac9508d65?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "regular": "https://images.unsplash.com/photo-1598260650504-f83ac9508d65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "small": "https://images.unsplash.com/photo-1598260650504-f83ac9508d65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ",
            "thumb": "https://images.unsplash.com/photo-1598260650504-f83ac9508d65?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0NjUwfQ"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/7LrjH48O_sU",
            "html": "https://unsplash.com/photos/7LrjH48O_sU",
            "download": "https://unsplash.com/photos/7LrjH48O_sU/download",
            "download_location": "https://api.unsplash.com/photos/7LrjH48O_sU/download"
        },
        "categories": [],
        "likes": 0,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": null,
        "user": {
            "id": "Z583ZBj3q7k",
            "updated_at": "2020-08-24T10:21:01-04:00",
            "username": "emmamatthews",
            "name": "Emma Matthews Digital Content Production",
            "first_name": "Emma",
            "last_name": "Matthews Digital Content Production",
            "twitter_username": "emmamatthewsdc",
            "portfolio_url": "http://www.emmamatthews.co.uk",
            "bio": "Based on the South Coast, Emma Matthews Digital Content Production is a bespoke design studio that specialise in digital content creation. We offer services in product and lifestyle photography, stop-motion animation, graphic design and digital copy.",
            "location": null,
            "links": {
                "self": "https://api.unsplash.com/users/emmamatthews",
                "html": "https://unsplash.com/@emmamatthews",
                "photos": "https://api.unsplash.com/users/emmamatthews/photos",
                "likes": "https://api.unsplash.com/users/emmamatthews/likes",
                "portfolio": "https://api.unsplash.com/users/emmamatthews/portfolio",
                "following": "https://api.unsplash.com/users/emmamatthews/following",
                "followers": "https://api.unsplash.com/users/emmamatthews/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1574716693782-349393fea656image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1574716693782-349393fea656image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1574716693782-349393fea656image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "emmamatthewsdigicontent",
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 37,
            "accepted_tos": true
        }
    }
]

const Home = (props) => {

    return (
        <Wrapper>
            <MainCover/>
            <CardWrapper list={list} style={{padding: '60px 0'}}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Home;