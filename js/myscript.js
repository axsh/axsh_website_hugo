{{ $script := resources.Get "js/myscript.js" }}
<script src="{{ $script.RelPermalink }}"></script>