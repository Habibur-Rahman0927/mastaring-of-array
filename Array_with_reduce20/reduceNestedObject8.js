// inspect nested objcets

const js = {
    name: 'javascript : All you need to know',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 222,
        }
    }
}

const node = {
    name: 'Dive into NodeJS',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 234,
        }
    }
}




const react = {
    name: 'react: All you need to know',
    author: {
        name: 'HM Nayem',
        email: 'hasan.m.nayem@gmail.com',
    },
    contents: {
        video: {
            count: 125,
        },
        articles: {
            count: 15,
        },
        quiz: {
            count: 10,
        }
    }
}
const inspectObj = (obj, path, retunValue = 0) => {
    return path.split('.').reduce((acc, cur) => {
        if (acc) {
            return acc[cur]
        }
        return retunValue;
    }, obj)
}

const course = [js, node, react];

course.forEach(course => {
    // console.log(`${course.name} has - Article: ${inspectObj(course, "contents.articles.count")}`)
    const countVideo = inspectObj(course, 'contents.video.count')
    const countArticle = inspectObj(course, 'contents.article.count')
    const countQuiz = inspectObj(course, 'contents.quiz.count');

    console.log(`Total video  = ${countVideo} , -- Articles = ${countArticle}, -- Quiz = ${countQuiz}`)
})