// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { PostCard } from "@/components/PostCard";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useNavigate } from "react-router-dom";
// import ProfileCard from "@/components/Postcardprofile";
// import { toast } from "sonner";
// import { MediaPreview } from "@/components/MediaPreview";

// import axios from "axios";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Upload, X } from "lucide-react";
// import { access } from "fs";

// interface Creator {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   profilePic: string;
//     allowed : true
//   // add other backend fields
// }

// const CreatorDashboard = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState<any[]>([]);
//   const [subscribers, setSubscribers] = useState<any[]>([]);
//   const [editingPostId, setEditingPostId] = useState<string | null>(null);
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const [postType, setPostType] = useState("free");
//   const [isUploading, setIsUploading] = useState(false);
// const [creatornow, setCreatornow] = useState<Creator | null>(null);
  



//  // x  const [newPost, setNewPost] = useState({ title: "", content: "" });
//   const [newPost, setNewPost] = useState({ 
//     title: "", 
//     content: "", 
//     contentType: "text",
//     mediaFile: null as File | null,
//     thumbnailFile: null as File | null,
//     access_type : "free"
//   });
//   const creatorName = localStorage.getItem("Name") || "Creator";
//   const creatorUserName = localStorage.getItem("userName")

//   useEffect(() => {
//     // Check if creator is logged in
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/creator/login");
//       return;
//     }

//     // TODO: Fetch posts
//     // Example: fetch('/api/creator/posts').then(res => res.json()).then(data => setPosts(data));
// /*const postget =axios.get(`http://localhost:5000/api/posts/creator/${creatorUserName}`)
//     console.log(creatorUserName)
//    // fetch(`http://localhost:5000/api/posts/creator/${creatorUserName}`).then(res => res.json()).then(data => setPosts(data));
//     postget.then(res => setPosts(res.data))
//     // TODO: Fetch subscribers
//     // Example: fetch('/api/creator/subscribers').then(res => res.json()).then(data => setSubscribers(data))
//     // ;
//      const check =axios.get(`http://localhost:5000/api/payment/subscribers`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//     check.then(res => {
      
      
//       setSubscribers(res.data.subscibers)
//       console.log(res.data)
//     })
   
//     // Auto-refresh data every 5 seconds
//     const interval = setInterval(() => {
//       // TODO: Re-fetch posts and subscribers
//       const postget =axios.get(`http://localhost:5000/api/posts/creator/${creatorUserName}`)

//    // fetch(`http://localhost:5000/api/posts/creator/${creatorUserName}`).then(res => res.json()).then(data => setPosts(data));
//     postget.then(res => {
//   setPosts(prev => {
//     if (JSON.stringify(prev) === JSON.stringify(res.data)) return prev;
//     return res.data;
//   });
// });
    
//        const check =axios.get(`http://localhost:5000/api/payment/subscribers`, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//     check.then(res => {
//   setSubscribers(prev => {
//     if (JSON.stringify(prev) === JSON.stringify(res.data.subscibers)) return prev;
//     return res.data.subscibers;
//   });
// });
//       console.log("Refreshing dashboard data...");
//     }
//     , 5000);*/
//     const profdata = async () =>{
//       const res =await axios.get(
//       "http://localhost:5000/api/auth/me",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       }
//     );
//     setCreatornow(res.data)
//     console.log(creatornow)

//     };
//    profdata()
//        console.log("fkjf",creatornow)


    
//     const fetchData = async () => {
//     try {
      
       
//       const postsRes = await axios.get(
//         `http://localhost:5000/api/posts/creator/${creatorUserName}`
//       );

//       setPosts(prev => {
//         if (JSON.stringify(prev) === JSON.stringify(postsRes.data)) return prev;
//         return postsRes.data;
//       });

//       const subsRes = await axios.get(
//         `http://localhost:5000/api/payment/subscribers`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setSubscribers(prev => {
//         if (
//           JSON.stringify(prev) === JSON.stringify(subsRes.data.subscibers)
//         ) return prev;

//         return subsRes.data.subscibers;
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Initial fetch
//   fetchData();

//   // Poll every 5s
//   const interval = setInterval(fetchData, 5000);

//     return () => clearInterval(interval);
//   }, [creatorUserName,navigate]);

//   const handleCreatePost = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = localStorage.getItem("userToken");
//     // x TODO: Create post API
//     // x Example: await fetch('/api/creator/posts', { method: 'POST', body: JSON.stringify(newPost) })
//     let mediaUrl = "";
//     let thumbnailUrl = "";

//      const formData = new FormData();
//      // SAME NAME AS upload.single('media')
//     formData.append("title", newPost.title);
//     formData.append("content", newPost.content);
//     formData.append("contentType", newPost.contentType);
   
//     try {
//       setIsUploading(true)
//     // TODO: Upload media file to Cloudinary
//     if (newPost.mediaFile) {
//       // Upload to Cloudinary and get the URL
//       // mediaUrl = await uploadToCloudinary(newPost.mediaFile);
//       formData.append("media", newPost.mediaFile);  
//       const res = await axios.post(
//       "http://localhost:5000/api/posts/save",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     mediaUrl = res.data.url;
//     console.log(mediaUrl)

     

//     }
    
//     // TODO: Upload thumbnail to Cloudinary (for videos)
//     if (newPost.contentType === 'video' && newPost.thumbnailFile) {
//       // Upload thumbnail to Cloudinary and get the URL
//       // thumbnailUrl = await uploadToCloudinary(newPost.thumbnailFile);
//        formData.set("media",newPost.thumbnailFile)
//        console.log(newPost.thumbnailFile)
//       const thumb =await axios.post("http://localhost:5000/api/posts/save",formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`
//     }
//     })
     
//     thumbnailUrl = thumb.data.url ;
//     console.log(thumbnailUrl)


//     }

//     if (newPost.contentType === 'audio' && newPost.thumbnailFile) {
//       // Upload thumbnail to Cloudinary and get the URL
//       // thumbnailUrl = await uploadToCloudinary(newPost.thumbnailFile);
//        formData.set("media",newPost.thumbnailFile)
//        console.log(newPost.thumbnailFile)
//       const thumb =await axios.post("http://localhost:5000/api/posts/save",formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`
//     }
//     })
     
//     thumbnailUrl = thumb.data.url ;
//     console.log(thumbnailUrl)


//     }
//     // TODO: Save post data to MongoDB
//     // const postData = {
//     //   title: newPost.title,
//     //   content: newPost.content,
//     //   contentType: newPost.contentType,
//     //   mediaUrl: mediaUrl,
//     //   thumbnailUrl: thumbnailUrl,
//     //   //creatorId: "YOUR_CREATOR_ID",
//     //   createdAt: new Date()
//     // };
//     // // await saveToMongoDB(postData);
//     // await axios.post("http://localhost:5000/api/posts/",postData, {
//     // headers: {
//     //   Authorization: `Bearer ${token}`
//     // }
//     // })
    
//     // Optimistic update for UI

//     // Add post to list instantly (optimistic update)
//     // const createdPost = {
//     //   id: Date.now().toString(),
//     //   // x ...newPost,
//     //    title: newPost.title,
//     //   content: newPost.content,
//     //   contentType: newPost.contentType,
//     //     mediaUrl: mediaUrl,
//     //   thumbnailUrl: thumbnailUrl,
//     //   createdAt: new Date().toISOString(),
//     // };
    
//     // setPosts([createdPost, ...posts]);
//      if (editingPostId) {
//       // TODO: Update post in MongoDB
//       const updatedPostData = {
//         id: editingPostId,
//         title: newPost.title,
//         content: newPost.content,
//         contentType: newPost.contentType,
//         mediaUrl: mediaUrl,
//         thumbnailUrl: thumbnailUrl,
//         access_type : postType,
//         updatedAt: new Date()
//       };

//       await axios.put(`http://localhost:5000/api/posts/${updatedPostData.id}`,updatedPostData, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })

//       // await updatePostInMongoDB(editingPostId, updatedPostData);

//       // Optimistic update for UI
//       setPosts(posts?.map(post => 
//         post.id === editingPostId 
//           ? { 
//               ...post, 
//               title: newPost.title, 
//               content: newPost.content,
//               contentType: newPost.contentType,
//               mediaUrl: mediaUrl || post.mediaUrl,
//               thumbnailUrl: thumbnailUrl || post.thumbnailUrl,
//               access_type : postType,

//             }
//           : post
//       ));
//       toast.success("Post updated successfully!");
//     } else {
//       // TODO: Save post data to MongoDB
//       const postData = {
//         title: newPost.title,
//         content: newPost.content,
//         contentType: newPost.contentType,
//         mediaUrl: mediaUrl,
//         thumbnailUrl: thumbnailUrl,
//         access_type : postType,

//         //creatorId: "YOUR_CREATOR_ID",
//         createdAt: new Date()
//       };
//       await axios.post(`http://localhost:5000/api/posts/`,postData, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//     })
//       // await saveToMongoDB(postData);

//       // Optimistic update for UI
//       const createdPost = {
//         id: Date.now().toString(),
//         title: newPost.title,
//         content: newPost.content,
//         contentType: newPost.contentType,
//         mediaUrl: mediaUrl,
//         thumbnailUrl: thumbnailUrl,
//                 access_type : postType,

//         createdAt: new Date().toISOString(),
//       };
      
//       setPosts([createdPost, ...posts]);
//       toast.success("Post created successfully!");
//     }}catch{
//           toast.success("Uploading Failed!");
//     }finally{
//       setIsUploading(false)
//         setNewPost({ 
//       title: "", 
//       content: "", 
//       contentType: "text",
//       mediaFile: null,
//       thumbnailFile: null,
//       access_type: "",
//     });
//     setShowCreatePost(false);
//     //toast.success("Post created successfully!");
//         setEditingPostId(null);
//     }

//     // x setNewPost({ title: "", content: "" });
     
//   };

//   const handleEditPost = (post: any) => {
//     setNewPost({
//       title: post.title,
//       content: post.content,
//       contentType: post.contentType,
//       mediaFile: null,
//       thumbnailFile: null,
//       access_type : "",

//     });
//     setEditingPostId(post._id);
//     setShowCreatePost(true);
//   };

//   const handleCancelEdit = () => {
//     setNewPost({ 
//       title: "", 
//       content: "", 
//       contentType: "text",
//       mediaFile: null,
//       thumbnailFile: null,
//       access_type: ""
//     });
//     setShowCreatePost(false);
//     setEditingPostId(null);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar userType="creator" userName={creatorName} />
      
//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         <h1 className="text-3xl font-bold text-foreground mb-8">Creator Dashboard</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//           {/* Creator Info */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Your Profile</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-center">
                
//                         {!creatornow ? (
//   <div>Loading profile...</div>
// ) : (
//   <ProfileCard user={creatornow} />
// )}
//                 {/* <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl mx-auto mb-3">
//                    <img
//               src={profilepic}
//               alt="profilepic"
//               className={`w-full h-full object-cover`}
//               style={{ transformOrigin: "50% 50%" }}
//             />

//                 </div> */}
//                 <h3 className="font-semibold text-lg">{creatorName}</h3>
//                 <p className="text-muted-foreground text-sm">@{creatorUserName.toLowerCase()}</p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Stats */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Stats</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               <div>
//                 <p className="text-sm text-muted-foreground">Total Posts</p>
//                 <p className="text-2xl font-bold">{posts? posts.length : 0}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground">Subscribers</p>
//                 <p className="text-2xl font-bold">{subscribers? subscribers.length : 0}</p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Quick Actions */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Quick Actions</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Button 
//                 className="w-full"
//                 //onClick={() => setShowCreatePost(!showCreatePost)}
//                     onClick={() => showCreatePost ? handleCancelEdit() : setShowCreatePost(true)}
//               >
//                 {showCreatePost ? "Cancel" : "Create New Post"}
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Create Post Form */}
        
//         {showCreatePost && (
//           <Card className="mb-8">
//             <CardHeader>
//               {/*<CardTitle>Create New Post</CardTitle>*/}
//                 <CardTitle>{editingPostId ? "Edit Post" : "Create New Post"}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleCreatePost} className="space-y-4">
//                 <div>
//                   <Label htmlFor="title">Post Title</Label>
//                   <Input
//                     id="title"
//                     value={newPost.title}
//                     onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                     placeholder="Enter post title..."
//                     required
//                     className="mt-1"
//                   />
//                 </div>
  
//                 {/* <div>
//                   <Label htmlFor="content">Content</Label> */}
//                   <div>
//                   <Label htmlFor="contentType">Content Type</Label>
//                   <Select 
//                     value={newPost.contentType} 
//                     onValueChange={(value) => setNewPost({ ...newPost, contentType: value })}
//                   >
//                     <SelectTrigger className="mt-1">
//                       <SelectValue placeholder="Select content type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="text">Text Only</SelectItem>
//                       <SelectItem value="image">Image</SelectItem>
//                       <SelectItem value="video">Video</SelectItem>
//                       <SelectItem value="audio">Audio</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {newPost.contentType !== "text" && (
//                   <div>
//                     <Label htmlFor="mediaFile">
//                       Upload {newPost.contentType === "image" ? "Image" : newPost.contentType === "video" ? "Video" : "Audio"}
//                     </Label>
//                     {/* <div className="mt-1 flex items-center gap-2"> */}
//                        <div className="mt-1">
//                       <Input
//                         id="mediaFile"
//                         type="file"
//                         name="media"
//                         accept={
//                           newPost.contentType === "image" ? "image/*" : 
//                           newPost.contentType === "video" ? "video/*" : 
//                           "audio/*"
//                         }
//                         onChange={(e) => setNewPost({ ...newPost, mediaFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer"
//                       />
//                       {/* {newPost.mediaFile && (
//                         <span className="text-sm text-muted-foreground">{newPost.mediaFile.name}</span>
//                       )}
//                     </div>
//                     <p className="text-xs text-muted-foreground mt-1">
                      
//                       Max file size: 100MB
//                     </p> */}
//                        </div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Max file size: 100MB
//                     </p>
                    
//                     <MediaPreview
//                       file={newPost.mediaFile}
//                       contentType={newPost.contentType}
//                       onRemove={() => setNewPost({ ...newPost, mediaFile: null })}
//                     />
//                   </div>
//                 )}

//                 {newPost.contentType === "video" && (
//                   <div>
//                     {/* <Label htmlFor="thumbnailFile">Video Thumbnail</Label>
//                     <div className="mt-1 flex items-center gap-2"> */}
//                      <Label htmlFor="thumbnailFile">Video Thumbnail (Optional)</Label>
//                     <div className="mt-1">
//                       <Input
//                         id="thumbnailFile"
//                         type="file"
//                         name="thumbnail"
//                         accept="image/*"
//                         onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer"
//                       />
//                       {/* {newPost.thumbnailFile && (
//                         <span className="text-sm text-muted-foreground">{newPost.thumbnailFile.name}</span>
//                       )}
//                     </div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Optional: Upload a custom thumbnail for your video
//                     </p> */}
//                        </div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Upload a custom thumbnail for your video
//                     </p>
                    
//                     <MediaPreview
//                       file={newPost.thumbnailFile}
//                       contentType="image"
//                       onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
//                     />
//                   </div>
//                 )}

//                 {newPost.contentType === "audio" && (
//                   <div>
//                     <Label htmlFor="thumbnailFile">Audio cover</Label>
//                     <div className="mt-1 flex items-center gap-2">
//                       <Input
//                         id="thumbnailFile"
//                         name="thumbnail"
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer"
//                       />
//                       {newPost.thumbnailFile && (
//                         <span className="text-sm text-muted-foreground">{newPost.thumbnailFile.name}</span>
//                       )}
//                     </div>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       Optional: Upload a custom cover for your audio
//                     </p>
//                     <MediaPreview
//                       file={newPost.thumbnailFile}
//                       contentType="image"
//                       onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
//                     />
//                   </div>
//                 )}
                
//                 <div>
//                   <Label htmlFor="content">Description</Label>
//                   <Textarea
//                     id="content"
//                     value={newPost.content}
//                     onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//                     // x placeholder="Write your post content..."
//                       placeholder="Write your post description..."
//                     required
//                     className="mt-1 min-h-[150px]"
//                   />
//                   <div className="my-4">
//   <h3 className="text-sm font-medium text-slate-700 mb-2">Post Type</h3>

//   <div className="flex items-center gap-6">

//     {/* Free */}
//     <label className="flex items-center gap-2 cursor-pointer">
//       <input
//         type="radio"
//         name="postType"
//         value="free"
//         checked={postType === "free"}
//         onChange={() => setPostType("free")}
//         className="h-4 w-4"
//       />
//       <span className="text-sm">Free</span>
//     </label>

//     {/* Paid */}
//     <label className="flex items-center gap-2 cursor-pointer">
//       <input
//         type="radio"
//         name="postType"
//         value="paid"
//         checked={postType === "paid"}
//         onChange={() => setPostType("paid")}
//         className="h-4 w-4"
//       />
//       <span className="text-sm">Paid</span>
//     </label>

//   </div>
// </div>

//                 </div>
//                    <Button disabled={isUploading} type="submit"  className="w-full">
//                   <Upload className="mr-2 h-4 w-4" />
//                   {/* Publish Post */}
//                          {editingPostId ? "Update Post" : "Publish Post"}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         )}
//         {isUploading && (
//   <div 
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
//   >
//     <div className="bg-white rounded-xl p-8 shadow-xl w-80 text-center">
//       <div className="loader mx-auto mb-4"></div>
//       <h2 className="text-lg font-semibold">Uploading…</h2>
//       <p className="text-muted-foreground text-sm mt-2">
//         Please wait, do not close or refresh.
//       </p>
//     </div>
//   </div>
// )}

//         {/* Posts Section */}
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>My Posts</CardTitle>
//             <CardDescription>Manage your published content</CardDescription>
//           </CardHeader>
//           <CardContent>
//             {posts.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-muted-foreground">No posts yet. Create your first post!</p>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {posts.map((post) => (
//                   <PostCard
//                     key={post._id}
//                     title={post.title}
//                     content={post.content}
//                     createdAt={post.createdAt}
//                     access_type={post.access_type}
//                     contentType={post.contentType}
//                     mediaUrl={post.mediaUrl}
//                     thumbnailUrl={post.thumbnailUrl}
//                     onEdit={() => handleEditPost(post)}
//                   />
                  
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Subscribers Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>My Subscribers</CardTitle>
//             <CardDescription>People supporting your work</CardDescription>
//           </CardHeader>
//           <CardContent>
//             {!subscribers ? (
//               <div className="text-center py-12">
//                 <p className="text-muted-foreground">No subscribers yet</p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="text-left py-3 px-4 font-medium">Name</th>
//                       <th className="text-left py-3 px-4 font-medium">Username</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {subscribers?.map((subscriber) => (
//                       <tr key={subscriber.id} className="border-b">
//                         <td className="py-3 px-4">{subscriber.name}</td>
//                         <td className="py-3 px-4 text-muted-foreground">
//                           @{subscriber.username}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CreatorDashboard;

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import ProfileCard from "@/components/Postcardprofile";
import { toast } from "sonner";
import { MediaPreview } from "@/components/MediaPreview";
import axios from "axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, X, Users, FileText, Crown, Plus, Edit, Sparkles, AlertTriangle } from "lucide-react";

interface Creator {
  id: string;
  name: string;
  email: string;
  role: string;
  profilePic: string;
  allowed: true;
 
}

const CreatorDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postType, setPostType] = useState("free");
  const [isUploading, setIsUploading] = useState(false);
  const [creatornow, setCreatornow] = useState<Creator | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState<any>(null);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    contentType: "text",
    mediaFile: null as File | null,
    thumbnailFile: null as File | null,
    access_type: "free"
  });
  const creatorName = localStorage.getItem("Name") || "Creator";
  const creatorUserName = localStorage.getItem("userName");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/creator/login");
      return;
    }

    const profdata = async () => {
      const res = await axios.get(
        "https://creatorbay.onrender.com/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setCreatornow(res.data);
      console.log(creatornow);
    };
    profdata();
    console.log("fkjf", creatornow);

    const fetchData = async () => {
      try {
        const postsRes = await axios.get(
          `https://creatorbay.onrender.com/api/posts/creator/${creatorUserName}`
        );

        setPosts(prev => {
          if (JSON.stringify(prev) === JSON.stringify(postsRes.data)) return prev;
          return postsRes.data;
        });

        const subsRes = await axios.get(
          `https://creatorbay.onrender.com/api/payment/subscribers`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setSubscribers(prev => {
          if (
            JSON.stringify(prev) === JSON.stringify(subsRes.data.subscibers)
          ) return prev;

          return subsRes.data.subscibers;
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [creatorUserName, navigate]);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    let mediaUrl = "";
    let thumbnailUrl = "";

    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("contentType", newPost.contentType);

    try {
      setIsUploading(true);
      if (newPost.mediaFile) {
        formData.append("media", newPost.mediaFile);
        const res = await axios.post(
          "https://creatorbay.onrender.com/api/posts/save",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        mediaUrl = res.data.url;
        console.log(mediaUrl);
      }

      if (newPost.contentType === 'video' && newPost.thumbnailFile) {
        formData.set("media", newPost.thumbnailFile);
        console.log(newPost.thumbnailFile);
        const thumb = await axios.post("https://creatorbay.onrender.com/api/posts/save", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        });
        thumbnailUrl = thumb.data.url;
        console.log(thumbnailUrl);
      }

      if (newPost.contentType === 'audio' && newPost.thumbnailFile) {
        formData.set("media", newPost.thumbnailFile);
        console.log(newPost.thumbnailFile);
        const thumb = await axios.post("https://creatorbay.onrender.com/api/posts/save", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        });
        thumbnailUrl = thumb.data.url;
        console.log(thumbnailUrl);
      }

      if (editingPostId) {
        const updatedPostData = {
          id: editingPostId,
          title: newPost.title,
          content: newPost.content,
          contentType: newPost.contentType,
          mediaUrl: mediaUrl,
          thumbnailUrl: thumbnailUrl,
          access_type: postType,
          updatedAt: new Date()
        };

        await axios.put(`https://creatorbay.onrender.com/api/posts/${updatedPostData.id}`, updatedPostData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPosts(posts?.map(post =>
          post.id === editingPostId
            ? {
              ...post,
              title: newPost.title,
              content: newPost.content,
              contentType: newPost.contentType,
              mediaUrl: mediaUrl || post.mediaUrl,
              thumbnailUrl: thumbnailUrl || post.thumbnailUrl,
              access_type: postType,
            }
            : post
        ));
        toast.success("Post updated successfully!");
      } else {
        const postData = {
          title: newPost.title,
          content: newPost.content,
          contentType: newPost.contentType,
          mediaUrl: mediaUrl,
          thumbnailUrl: thumbnailUrl,
          access_type: postType,
          createdAt: new Date()
        };
        await axios.post(`https://creatorbay.onrender.com/api/posts/`, postData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const createdPost = {
          id: Date.now().toString(),
          title: newPost.title,
          content: newPost.content,
          contentType: newPost.contentType,
          mediaUrl: mediaUrl,
          thumbnailUrl: thumbnailUrl,
          access_type: postType,
          createdAt: new Date().toISOString(),
        };

        setPosts([createdPost, ...posts]);
        toast.success("Post created successfully!");
      }
    } catch {
      toast.error("Uploading Failed!");
    } finally {
  
      setNewPost({
        title: "",
        content: "",
        contentType: "text",
        mediaFile: null,
        thumbnailFile: null,
        access_type: "",
      });
      setShowCreatePost(false);
      setEditingPostId(null);
      setIsUploading(false)
    }
  };

  const handleEditPost = (post: any) => {
    setNewPost({
      title: post.title,
      content: post.content,
      contentType: post.contentType,
      mediaFile: null,
      thumbnailFile: null,
      access_type: "",
    });
    setEditingPostId(post._id);
    setShowCreatePost(true);
  };

  const handleDeletePost = (post: any) => {
    
    setPostToDelete(post);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
        const token = localStorage.getItem("userToken");

    if (!postToDelete) return;
    
    try {
      await axios.delete(`https://creatorbay.onrender.com/api/posts/${postToDelete._id}`,
        { headers: {
            Authorization: `Bearer ${token}`
          }
          });
      
      const postsRes = await axios.get(
        `https://creatorbay.onrender.com/api/posts/creator/${creatorUserName}`
      );
      
      setPosts(prev => {
        if (JSON.stringify(prev) === JSON.stringify(postsRes.data)) return prev;
        return postsRes.data;
      });
      
      toast.success("Post deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete post");
      console.error("Delete error:", error);
    } finally {
      setShowDeleteConfirm(false);
      setPostToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setPostToDelete(null);
  };

  const handleCancelEdit = () => {
    setNewPost({
      title: "",
      content: "",
      contentType: "text",
      mediaFile: null,
      thumbnailFile: null,
      access_type: ""
    });
    setShowCreatePost(false);
    setEditingPostId(null);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar userType="creator" userName={creatorName} />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Creator Dashboard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Welcome, <span className="text-orange-500">{creatorName}</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Manage your content and engage with your subscribers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent"></div>
            <div className="p-6 -mt-12">
              <div className="flex justify-center mb-4">
                {!creatornow ? (
                  <div className="text-gray-400">Loading profile...</div>
                ) : (
                  <ProfileCard user={creatornow} />
                )}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-white">{creatorName}</h3>
                <p className="text-gray-500 text-sm">@{creatorUserName?.toLowerCase()}</p>
              </div>
            </div>
          </div>

          {/* Total Posts */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <FileText className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Posts</p>
                <p className="text-3xl font-bold text-white">{posts ? posts.length : 0}</p>
              </div>
            </div>
          </div>

          {/* Subscribers */}
          <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Subscribers</p>
                <p className="text-3xl font-bold text-white">{subscribers ? subscribers.length : 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Create Post Button */}
        <div className="mb-8">
          <button
            onClick={() => showCreatePost ? handleCancelEdit() : setShowCreatePost(true)}
            className="w-full md:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            {showCreatePost ? (
              <>
                <X className="w-5 h-5" />
                Cancel
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                Create New Post
              </>
            )}
          </button>
        </div>

        {/* Create/Edit Post Form */}
        {showCreatePost && (
          <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                {editingPostId ? "Edit Post" : "Create New Post"}
              </h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleCreatePost} className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-white mb-2 block">Post Title</Label>
                  <Input
                    id="title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Enter post title..."
                    required
                    className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <Label htmlFor="contentType" className="text-white mb-2 block">Content Type</Label>
                  <Select
                    value={newPost.contentType}
                    onValueChange={(value) => setNewPost({ ...newPost, contentType: value })}
                  >
                    <SelectTrigger className="bg-black border-gray-800 text-white">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-gray-800 text-white">
                      <SelectItem value="text">Text Only</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="audio">Audio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {newPost.contentType !== "text" && (
                  <div>
                    <Label htmlFor="mediaFile" className="text-white mb-2 block">
                      Upload {newPost.contentType === "image" ? "Image" : newPost.contentType === "video" ? "Video" : "Audio"}
                    </Label>
                    <div className="mt-1">
                      <Input
                        id="mediaFile"
                        type="file"
                        name="media"
                        accept={
                          newPost.contentType === "image" ? "image/*" :
                            newPost.contentType === "video" ? "video/*" :
                              "audio/*"
                        }
                        onChange={(e) => setNewPost({ ...newPost, mediaFile: e.target.files?.[0] || null })}
                        className="cursor-pointer bg-black border-gray-800 text-white"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Max file size: 100MB
                    </p>

                    <MediaPreview
                      file={newPost.mediaFile}
                      contentType={newPost.contentType}
                      onRemove={() => setNewPost({ ...newPost, mediaFile: null })}
                    />
                  </div>
                )}

                {newPost.contentType === "video" && (
                  <div>
                    <Label htmlFor="thumbnailFile" className="text-white mb-2 block">Video Thumbnail (Optional)</Label>
                    <div className="mt-1">
                      <Input
                        id="thumbnailFile"
                        type="file"
                        name="thumbnail"
                        accept="image/*"
                        onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
                        className="cursor-pointer bg-black border-gray-800 text-white"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Upload a custom thumbnail for your video
                    </p>

                    <MediaPreview
                      file={newPost.thumbnailFile}
                      contentType="image"
                      onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
                    />
                  </div>
                )}

                {newPost.contentType === "audio" && (
                  <div>
                    <Label htmlFor="thumbnailFile" className="text-white mb-2 block">Audio Cover</Label>
                    <div className="mt-1">
                      <Input
                        id="thumbnailFile"
                        name="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
                        className="cursor-pointer bg-black border-gray-800 text-white"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Optional: Upload a custom cover for your audio
                    </p>
                    <MediaPreview
                      file={newPost.thumbnailFile}
                      contentType="image"
                      onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="content" className="text-white mb-2 block">Description</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Write your post description..."
                    required
                    className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500 min-h-[150px]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white mb-3">Post Type</h3>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="postType"
                        value="free"
                        checked={postType === "free"}
                        onChange={() => setPostType("free")}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
                      />
                      <span className="text-sm text-gray-300">Free</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="postType"
                        value="paid"
                        checked={postType === "paid"}
                        onChange={() => setPostType("paid")}
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
                      />
                      <span className="text-sm text-gray-300 flex items-center gap-1">
                        <Crown className="w-4 h-4" />
                        Paid
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  disabled={isUploading}
                  type="submit"
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  {editingPostId ? "Update Post" : "Publish Post"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Posts Section */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              My Posts
            </h2>
            <p className="text-gray-400 mt-1">Manage your published content</p>
          </div>
          <div className="p-6">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Posts Yet</h3>
                <p className="text-gray-400 mb-6">
                  Create your first post to start sharing content
                </p>
                <button
                  onClick={() => setShowCreatePost(true)}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105"
                >
                  Create First Post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard
                    key={post._id}
                    title={post.title}
                    content={post.content}
                    createdAt={post.createdAt}
                    access_type={post.access_type}
                    contentType={post.contentType}
                    mediaUrl={post.mediaUrl}
                    thumbnailUrl={post.thumbnailUrl}
                    onEdit={() => handleEditPost(post)}
                    onDelete={() => handleDeletePost(post)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subscribers Section */}
        <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              My Subscribers
            </h2>
            <p className="text-gray-400 mt-1">People supporting your work</p>
          </div>
          <div className="p-6">
            {!subscribers || subscribers.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Subscribers Yet</h3>
                <p className="text-gray-400">
                  Share your profile to get your first subscribers
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-400">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers?.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b border-gray-800 hover:bg-black/30 transition-colors">
                        <td className="py-3 px-4 text-white">{subscriber.name}</td>
                        <td className="py-3 px-4 text-gray-400">
                          @{subscriber.username}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-full max-w-md mx-4">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">Delete Post?</h2>
            <p className="text-gray-400 text-center mb-6">
              Are you sure you want to delete "{postToDelete?.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelDelete}
                className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl font-semibold transition-all border border-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all hover:scale-[1.02]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal */}
      {isUploading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
            <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold text-white mb-2">Uploading...</h2>
            <p className="text-gray-400 text-sm">
              Please wait, do not close or refresh.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorDashboard;

// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/Navbar";
// import { PostCard } from "@/components/PostCard";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useNavigate } from "react-router-dom";
// import ProfileCard from "@/components/Postcardprofile";
// import { toast } from "sonner";
// import { MediaPreview } from "@/components/MediaPreview";
// import axios from "axios";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Upload, X, Users, FileText, Crown, Plus, Edit, Sparkles } from "lucide-react";

// interface Creator {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   profilePic: string;
//   allowed: true;
// }

// const CreatorDashboard = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState<any[]>([]);
//   const [subscribers, setSubscribers] = useState<any[]>([]);
//   const [editingPostId, setEditingPostId] = useState<string | null>(null);
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const [postType, setPostType] = useState("free");
//   const [isUploading, setIsUploading] = useState(false);
//   const [creatornow, setCreatornow] = useState<Creator | null>(null);

//   const [newPost, setNewPost] = useState({
//     title: "",
//     content: "",
//     contentType: "text",
//     mediaFile: null as File | null,
//     thumbnailFile: null as File | null,
//     access_type: "free"
//   });
//   const creatorName = localStorage.getItem("Name") || "Creator";
//   const creatorUserName = localStorage.getItem("userName");

//   useEffect(() => {
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       navigate("/creator/login");
//       return;
//     }

//     const profdata = async () => {
//       const res = await axios.get(
//         "http://localhost:5000/api/auth/me",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//         }
//       );
//       setCreatornow(res.data);
//       console.log(creatornow);
//     };
//     profdata();
//     console.log("fkjf", creatornow);

//     const fetchData = async () => {
//       try {
//         const postsRes = await axios.get(
//           `http://localhost:5000/api/posts/creator/${creatorUserName}`
//         );

//         setPosts(prev => {
//           if (JSON.stringify(prev) === JSON.stringify(postsRes.data)) return prev;
        
//           return postsRes.data;
//         });

//         const subsRes = await axios.get(
//           `http://localhost:5000/api/payment/subscribers`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         setSubscribers(prev => {
//           if (
//             JSON.stringify(prev) === JSON.stringify(subsRes.data.subscibers)
//           ) return prev;

//           return subsRes.data.subscibers;
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000);
//     return () => clearInterval(interval);
//   }, [creatorUserName, navigate]);

//   const handleCreatePost = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = localStorage.getItem("userToken");
//     let mediaUrl = "";
//     let thumbnailUrl = "";

//     const formData = new FormData();
//     formData.append("title", newPost.title);
//     formData.append("content", newPost.content);
//     formData.append("contentType", newPost.contentType);

//     try {
//       setIsUploading(true);
//       if (newPost.mediaFile) {
//         formData.append("media", newPost.mediaFile);
//         const res = await axios.post(
//           "http://localhost:5000/api/posts/save",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         mediaUrl = res.data.url;
//         console.log(mediaUrl);
//       }

//       if (newPost.contentType === 'video' && newPost.thumbnailFile) {
//         formData.set("media", newPost.thumbnailFile);
//         console.log(newPost.thumbnailFile);
//         const thumb = await axios.post("http://localhost:5000/api/posts/save", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`
//           }
//         });
//         thumbnailUrl = thumb.data.url;
//         console.log(thumbnailUrl);
//       }

//       if (newPost.contentType === 'audio' && newPost.thumbnailFile) {
//         formData.set("media", newPost.thumbnailFile);
//         console.log(newPost.thumbnailFile);
//         const thumb = await axios.post("http://localhost:5000/api/posts/save", formData, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`
//           }
//         });
//         thumbnailUrl = thumb.data.url;
//         console.log(thumbnailUrl);
//       }

//       if (editingPostId) {
//         const updatedPostData = {
//           id: editingPostId,
//           title: newPost.title,
//           content: newPost.content,
//           contentType: newPost.contentType,
//           mediaUrl: mediaUrl,
//           thumbnailUrl: thumbnailUrl,
//           access_type: postType,
//           updatedAt: new Date()
//         };

//         await axios.put(`http://localhost:5000/api/posts/${updatedPostData.id}`, updatedPostData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         setPosts(posts?.map(post =>
//           post.id === editingPostId
//             ? {
//               ...post,
//               title: newPost.title,
//               content: newPost.content,
//               contentType: newPost.contentType,
//               mediaUrl: mediaUrl || post.mediaUrl,
//               thumbnailUrl: thumbnailUrl || post.thumbnailUrl,
//               access_type: postType,
//             }
//             : post
//         ));
//         toast.success("Post updated successfully!");
//       } else {
//         const postData = {
//           title: newPost.title,
//           content: newPost.content,
//           contentType: newPost.contentType,
//           mediaUrl: mediaUrl,
//           thumbnailUrl: thumbnailUrl,
//           access_type: postType,
//           createdAt: new Date()
//         };
//         await axios.post(`http://localhost:5000/api/posts/`, postData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         const createdPost = {
//           id: Date.now().toString(),
//           title: newPost.title,
//           content: newPost.content,
//           contentType: newPost.contentType,
//           mediaUrl: mediaUrl,
//           thumbnailUrl: thumbnailUrl,
//           access_type: postType,
//           createdAt: new Date().toISOString(),
//         };

//         setPosts([createdPost, ...posts]);
//         toast.success("Post created successfully!");
//       }
//     } catch {
//       toast.error("Uploading Failed!");
//     } finally {
//       setIsUploading(false);
//       setNewPost({
//         title: "",
//         content: "",
//         contentType: "text",
//         mediaFile: null,
//         thumbnailFile: null,
//         access_type: "",
//       });
//       setShowCreatePost(false);
//       setEditingPostId(null);
//     }
//   };

//   const handleEditPost = (post: any) => {
//     setNewPost({
//       title: post.title,
//       content: post.content,
//       contentType: post.contentType,
//       mediaFile: null,
//       thumbnailFile: null,
//       access_type: "",
//     });
//     setEditingPostId(post._id);
//     setShowCreatePost(true);
//   };

//   const handleDeletePost = (post: any) =>{
//     const del = axios.delete(`http://localhost:5000/api/posts/${post._id}`)
//     del.then((res)=>{
//        axios.get(
//           `http://localhost:5000/api/posts/creator/${creatorUserName}`
//         ).then(res => {
//            setPosts(prev => {
//           if (JSON.stringify(prev) === JSON.stringify(res.data)) return prev;
//           return res.data;
//         });


//         });
        
//     })
//   }


//   const handleCancelEdit = () => {
//     setNewPost({
//       title: "",
//       content: "",
//       contentType: "text",
//       mediaFile: null,
//       thumbnailFile: null,
//       access_type: ""
//     });
//     setShowCreatePost(false);
//     setEditingPostId(null);
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       <Navbar userType="creator" userName={creatorName} />

//       <div className="container mx-auto px-4 py-8 max-w-6xl">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
//             <Sparkles className="w-4 h-4" />
//             Creator Dashboard
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//             Welcome, <span className="text-orange-500">{creatorName}</span>
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Manage your content and engage with your subscribers
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//           {/* Profile Card */}
//           <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
//             <div className="h-24 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent"></div>
//             <div className="p-6 -mt-12">
//               <div className="flex justify-center mb-4">
//                 {!creatornow ? (
//                   <div className="text-gray-400">Loading profile...</div>
//                 ) : (
//                   <ProfileCard user={creatornow} />
//                 )}
//               </div>
//               <div className="text-center">
//                 <h3 className="font-bold text-xl text-white">{creatorName}</h3>
//                 <p className="text-gray-500 text-sm">@{creatorUserName?.toLowerCase()}</p>
//               </div>
//             </div>
//           </div>

//           {/* Total Posts */}
//           <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-orange-500/20 rounded-lg">
//                 <FileText className="w-8 h-8 text-orange-400" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400 mb-1">Total Posts</p>
//                 <p className="text-3xl font-bold text-white">{posts ? posts.length : 0}</p>
//               </div>
//             </div>
//           </div>

//           {/* Subscribers */}
//           <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-orange-500/20 rounded-lg">
//                 <Users className="w-8 h-8 text-orange-400" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400 mb-1">Subscribers</p>
//                 <p className="text-3xl font-bold text-white">{subscribers ? subscribers.length : 0}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Create Post Button */}
//         <div className="mb-8">
//           <button
//             onClick={() => showCreatePost ? handleCancelEdit() : setShowCreatePost(true)}
//             className="w-full md:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
//           >
//             {showCreatePost ? (
//               <>
//                 <X className="w-5 h-5" />
//                 Cancel
//               </>
//             ) : (
//               <>
//                 <Plus className="w-5 h-5" />
//                 Create New Post
//               </>
//             )}
//           </button>
//         </div>

//         {/* Create/Edit Post Form */}
//         {showCreatePost && (
//           <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
//             <div className="p-6 border-b border-gray-800">
//               <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//                 <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
//                 {editingPostId ? "Edit Post" : "Create New Post"}
//               </h2>
//             </div>
//             <div className="p-6">
//               <form onSubmit={handleCreatePost} className="space-y-6">
//                 <div>
//                   <Label htmlFor="title" className="text-white mb-2 block">Post Title</Label>
//                   <Input
//                     id="title"
//                     value={newPost.title}
//                     onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                     placeholder="Enter post title..."
//                     required
//                     className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="contentType" className="text-white mb-2 block">Content Type</Label>
//                   <Select
//                     value={newPost.contentType}
//                     onValueChange={(value) => setNewPost({ ...newPost, contentType: value })}
//                   >
//                     <SelectTrigger className="bg-black border-gray-800 text-white">
//                       <SelectValue placeholder="Select content type" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-neutral-900 border-gray-800">
//                       <SelectItem value="text">Text Only</SelectItem>
//                       <SelectItem value="image">Image</SelectItem>
//                       <SelectItem value="video">Video</SelectItem>
//                       <SelectItem value="audio">Audio</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {newPost.contentType !== "text" && (
//                   <div>
//                     <Label htmlFor="mediaFile" className="text-white mb-2 block">
//                       Upload {newPost.contentType === "image" ? "Image" : newPost.contentType === "video" ? "Video" : "Audio"}
//                     </Label>
//                     <div className="mt-1">
//                       <Input
//                         id="mediaFile"
//                         type="file"
//                         name="media"
//                         accept={
//                           newPost.contentType === "image" ? "image/*" :
//                             newPost.contentType === "video" ? "video/*" :
//                               "audio/*"
//                         }
//                         onChange={(e) => setNewPost({ ...newPost, mediaFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer bg-black border-gray-800 text-white"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">
//                       Max file size: 100MB
//                     </p>

//                     <MediaPreview
//                       file={newPost.mediaFile}
//                       contentType={newPost.contentType}
//                       onRemove={() => setNewPost({ ...newPost, mediaFile: null })}
//                     />
//                   </div>
//                 )}

//                 {newPost.contentType === "video" && (
//                   <div>
//                     <Label htmlFor="thumbnailFile" className="text-white mb-2 block">Video Thumbnail (Optional)</Label>
//                     <div className="mt-1">
//                       <Input
//                         id="thumbnailFile"
//                         type="file"
//                         name="thumbnail"
//                         accept="image/*"
//                         onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer bg-black border-gray-800 text-white"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">
//                       Upload a custom thumbnail for your video
//                     </p>

//                     <MediaPreview
//                       file={newPost.thumbnailFile}
//                       contentType="image"
//                       onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
//                     />
//                   </div>
//                 )}

//                 {newPost.contentType === "audio" && (
//                   <div>
//                     <Label htmlFor="thumbnailFile" className="text-white mb-2 block">Audio Cover</Label>
//                     <div className="mt-1">
//                       <Input
//                         id="thumbnailFile"
//                         name="thumbnail"
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => setNewPost({ ...newPost, thumbnailFile: e.target.files?.[0] || null })}
//                         className="cursor-pointer bg-black border-gray-800 text-white"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-2">
//                       Optional: Upload a custom cover for your audio
//                     </p>
//                     <MediaPreview
//                       file={newPost.thumbnailFile}
//                       contentType="image"
//                       onRemove={() => setNewPost({ ...newPost, thumbnailFile: null })}
//                     />
//                   </div>
//                 )}

//                 <div>
//                   <Label htmlFor="content" className="text-white mb-2 block">Description</Label>
//                   <Textarea
//                     id="content"
//                     value={newPost.content}
//                     onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//                     placeholder="Write your post description..."
//                     required
//                     className="bg-black border-gray-800 text-white placeholder-gray-500 focus:border-orange-500 min-h-[150px]"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-medium text-white mb-3">Post Type</h3>
//                   <div className="flex items-center gap-6">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="postType"
//                         value="free"
//                         checked={postType === "free"}
//                         onChange={() => setPostType("free")}
//                         className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
//                       />
//                       <span className="text-sm text-gray-300">Free</span>
//                     </label>

//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="postType"
//                         value="paid"
//                         checked={postType === "paid"}
//                         onChange={() => setPostType("paid")}
//                         className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 bg-gray-700"
//                       />
//                       <span className="text-sm text-gray-300 flex items-center gap-1">
//                         <Crown className="w-4 h-4" />
//                         Paid
//                       </span>
//                     </label>
//                   </div>
//                 </div>

//                 <button
//                   disabled={isUploading}
//                   type="submit"
//                   className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   <Upload className="w-5 h-5" />
//                   {editingPostId ? "Update Post" : "Publish Post"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* Posts Section */}
//         <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
//           <div className="p-6 border-b border-gray-800">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
//               My Posts
//             </h2>
//             <p className="text-gray-400 mt-1">Manage your published content</p>
//           </div>
//           <div className="p-6">
//             {posts.length === 0 ? (
//               <div className="text-center py-16">
//                 <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <FileText className="w-10 h-10 text-gray-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">No Posts Yet</h3>
//                 <p className="text-gray-400 mb-6">
//                   Create your first post to start sharing content
//                 </p>
//                 <button
//                   onClick={() => setShowCreatePost(true)}
//                   className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all hover:scale-105"
//                 >
//                   Create First Post
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {posts.map((post) => (
//                   <PostCard
//                     key={post._id}
//                     title={post.title}
//                     content={post.content}
//                     createdAt={post.createdAt}
//                     access_type={post.access_type}
//                     contentType={post.contentType}
//                     mediaUrl={post.mediaUrl}
//                     thumbnailUrl={post.thumbnailUrl}
//                     onEdit={() => handleEditPost(post)}
//                     onDelete={() => handleDeletePost(post)}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Subscribers Section */}
//         <div className="bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden">
//           <div className="p-6 border-b border-gray-800">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-3">
//               <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
//               My Subscribers
//             </h2>
//             <p className="text-gray-400 mt-1">People supporting your work</p>
//           </div>
//           <div className="p-6">
//             {!subscribers || subscribers.length === 0 ? (
//               <div className="text-center py-16">
//                 <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="w-10 h-10 text-gray-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">No Subscribers Yet</h3>
//                 <p className="text-gray-400">
//                   Share your profile to get your first subscribers
//                 </p>
//               </div>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-800">
//                       <th className="text-left py-3 px-4 font-medium text-gray-400">Name</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-400">Username</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {subscribers?.map((subscriber) => (
//                       <tr key={subscriber.id} className="border-b border-gray-800 hover:bg-black/30 transition-colors">
//                         <td className="py-3 px-4 text-white">{subscriber.name}</td>
//                         <td className="py-3 px-4 text-gray-400">
//                           @{subscriber.username}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Loading Modal */}
//       {isUploading && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-neutral-900 border border-gray-800 rounded-xl p-8 shadow-2xl w-80 text-center">
//             <div className="w-16 h-16 border-4 border-gray-800 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
//             <h2 className="text-lg font-semibold text-white mb-2">Uploading...</h2>
//             <p className="text-gray-400 text-sm">
//               Please wait, do not close or refresh.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreatorDashboard;