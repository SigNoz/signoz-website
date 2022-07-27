import React from "react";

const BlogStrip = (): JSX.Element => {
  return (
    <div className="bg-signoz-medium">
      <div className="py-4 px-6 text-center">
        <span className="font-bold text-xs text-white">New blog post!</span>
        <span className="font-semibold text-xs text-white">
          “Understand the performance of your applications and identify any
          potential problems before your users”
        </span>
        <span className="font-semibold cursor-pointer text-signoz-primary-light">
          &nbsp;Learn more
        </span>
      </div>
    </div>
  );
};

export default BlogStrip;
