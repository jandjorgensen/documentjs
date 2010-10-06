DocumentJS.Tags.page = {
    add: function(line){
        var m = line.match(/^@\w+\s+([^\s]+)\s+(.+)/)
        if(m){
            this.name = m[1];
            this.title = m[2] || this.name;
        }
    }
};