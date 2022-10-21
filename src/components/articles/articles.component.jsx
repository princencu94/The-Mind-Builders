import { Link } from "react-router-dom"
const posts = [
    {
      title: 'Enforcing the Truths you WANT Interviewers to See in You',
      href: '/articles/enforcing-truths-you-want-interviewers-see',
      description:
        'As humans, we have senses. We have memory. And we have a way of connecting every current experience to something from our past, to give context for how we should behave in the present situation.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    
  ]
  
  export default function Articles() {
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg  lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles</h2>
            
          </div>
          <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                {/* <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p> */}
                <Link to={post.href} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </Link>
                <div className="mt-3">
                  <Link to={post.href} className="text-base font-semibold text-yellow-300 hover:text-yellow-200">
                    Read full story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  