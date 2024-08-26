
const Twitter = function () {
  this.tweetPosts = [];
  this.tweetUsers = [];
  this.followings = {};
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweetPosts = [...this.tweetPosts, tweetId]
  this.tweetUsers = [...this.tweetUsers, userId]
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const limit = this.tweetPosts.length > 10 ? 10 : this.tweetPosts.length
  let feed = []
  let count = 0
  for (let i = this.tweetPosts.length - 1; i >= 0; i--) {
    if (count === limit) {
      break;
    }
    if (this.tweetUsers[i] === userId) {
      feed.push(this.tweetPosts[i])
      count++
    } else if (this.followings[userId] && this.followings[userId].includes(this.tweetUsers[i])) {
      feed.push(this.tweetPosts[i])
      count++
    }
  }
  return feed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followings[followerId]) {
    this.followings[followerId] = []
  }
  this.followings[followerId] = [...this.followings[followerId], followeeId]
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.followings[followerId]?.find((follow, index) => {
    if (follow === followeeId) {
      delete this.followings[followerId][index]
    }
    return false
  })
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */