function solution(obj, arg) {
    function upvoting(){
        obj.upvotes += 1;
        return obj.upvotes;
    }

    function downvoting() {
        obj.downvotes += 1;
        return obj.downvotes;
    }

    function scoring() {
        let arr = [];
        let allVotes = obj.downvotes + obj.upvotes;
        let balance = obj.upvotes - obj.downvotes;

        if (allVotes < 50) {
            arr.push(obj.upvotes);
            arr.push(obj.downvotes);           
            arr.push(balance);
        } else {
            let {upvotes, downvotes} = obj;
            let extra = Math.ceil(0.25 * Math.max(upvotes, downvotes));
            let extraUpvotes = upvotes + extra;
            let extraDownvotes = downvotes + extra;
            arr.push(extraUpvotes);
            arr.push(extraDownvotes);
            balance = extraUpvotes - extraDownvotes;
            arr.push(balance);
            allVotes = extraUpvotes + extraDownvotes;
        }

        let rating = '';

        if (allVotes >= 10 && balance < 0) {
            rating = 'unpopular';
        } else if (allVotes >= 10 && balance > (allVotes * 0.66)){
            rating = 'hot';
        } else if (obj.downvotes >= 100 || obj.upvotes >= 100 && balance >= 0){
            rating = 'controversial';
        } else {
            rating = 'new';
        }
        
        arr.push(rating);
        return console.log(arr);
    }

    switch(arg){
        case 'upvote': upvoting(obj);
            break;
        case 'downvote': downvoting(obj);
            break;
        case 'score': scoring(obj);
            break;
            default:
                break;
        }
};

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution(post, 'upvote');
solution(post, 'downvote');
solution(post, 'score');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
solution(post, 'downvote');
score = solution(post, 'score'); 
