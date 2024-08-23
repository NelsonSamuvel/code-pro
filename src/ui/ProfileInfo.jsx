function ProfileInfo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/batman.jpg"
        alt="profile"
        className="w-10 h-10 object-cover rounded-full"
      />
      <h3 className=" text-slate-900">Name</h3>
    </div>
  );
}

export default ProfileInfo;
