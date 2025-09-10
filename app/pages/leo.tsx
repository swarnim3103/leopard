export default function Leo(){
return (
<>
<div className="w-full h-screen bg-black flex items-center justify-center">
      <iframe
        src="/game/index.html"
        width="960"
        height="600"
        title="Leopard Game"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ 
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(245, 166, 35, 0.5)"
        }}
        className="max-w-full max-h-full"
      />
</div>
</>
);
}