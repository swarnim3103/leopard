export default function Leo(){
return (
<>
<div className="w-screen h-screen bg-black overflow-hidden">
      <iframe
        src="/game/index.html"
        width="100%"
        height="100%"
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
          width: "100vw",
          height: "100vh"
        }}
        className="w-full h-full block"
      />
</div>
</>
);
}